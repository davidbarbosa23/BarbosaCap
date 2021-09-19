import React, { FC, lazy, Suspense } from 'react';

const LazyDropdown = lazy(() => import('./Dropdown'));

const Dropdown: FC = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyDropdown {...props} />
  </Suspense>
);

export default Dropdown;
