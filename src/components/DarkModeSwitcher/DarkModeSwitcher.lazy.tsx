import React, { FC, lazy, Suspense } from 'react';

const LazyDarkModeSwitcher = lazy(() => import('.'));

const Dropdown: FC = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyDarkModeSwitcher {...props} />
  </Suspense>
);

export default Dropdown;
