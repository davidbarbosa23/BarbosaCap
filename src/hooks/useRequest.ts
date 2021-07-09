import { useCallback, useEffect, useState } from 'react';

const executeAsyncRequest = async ({
  values,
  request,
  onPrefetch,
  onSuccess,
  onError,
  onPostFetch,
}: any) => {
  try {
    onPrefetch();
    const response = await request(values);
    const isSuccess = response.status === undefined || response.status < 400;
    const hasExplicitError = response.isError;

    if (hasExplicitError) {
      onError(response);
    } else {
      if (isSuccess) {
        onSuccess(response);
      } else {
        onError(response);
      }
    }

    onPostFetch(response);
  } catch (error) {
    console.error(error); // do not remove this line
    onError(error.response || error);
  }
};

// Returns a request to execute manually at some point, and the variables that will be updated when it does
export const useLazyRequest = ({
  request,
  withPostSuccess,
  withPostFailure,
  initialState = null,
  withPostFetch,
  transformResponse = (response: any) => response,
}: any) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    (values) => {
      executeAsyncRequest({
        values,
        request,
        onPrefetch: () => {
          setLoading(true);
          setState(initialState);
          setError(null);
        },
        onSuccess: (data: any) => {
          const transformedResponse = data ? transformResponse(data) : undefined;
          setState(transformedResponse);
          if (withPostSuccess) {
            withPostSuccess(transformedResponse);
          }
        },
        onError: (errorInfo: any) => {
          setLoading(false);
          setError(() => errorInfo);
          if (withPostFailure) {
            withPostFailure(errorInfo);
          }
        },
        onPostFetch: (response: any) => {
          setLoading(false);
          if (withPostFetch) {
            withPostFetch(transformResponse(response));
          }
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialState, request, withPostFailure, withPostSuccess]
  );

  const resetState = () => {
    setState(initialState);
    setLoading(false);
    setError(null);
  };

  return [state, loading, error, sendRequest, resetState];
};

// Executes a request each time a dependency changes and returns the values and the refetch function
// in case you want to execute it again
export const useRequest = (
  {
    request,
    payload,
    withPostSuccess,
    withPostFailure,
    initialState = null,
    withPostFetch,
    transformResponse = (response: any) => response,
  }: any,
  dependencies: any[] = []
) => {
  const [state, loading, error, sendRequest] = useLazyRequest({
    request,
    withPostSuccess,
    withPostFailure,
    initialState,
    withPostFetch,
    transformResponse,
  });

  useEffect(
    () => {
      sendRequest(payload);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );

  return [state, loading, error, sendRequest];
};
