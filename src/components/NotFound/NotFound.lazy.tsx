import React, { lazy, Suspense } from 'react';

const LazyNotFound = lazy(() => import('.'));

const NotFound = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNotFound {...props} />
  </Suspense>
);

export default NotFound;
