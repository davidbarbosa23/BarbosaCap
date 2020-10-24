import React, { lazy, Suspense } from 'react';

const LazyPageNotFound = lazy(() => import('.'));

const PageNotFound = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPageNotFound {...props} />
  </Suspense>
);

export default PageNotFound;
