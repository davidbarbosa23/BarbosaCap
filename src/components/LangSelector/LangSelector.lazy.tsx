import React, { lazy, Suspense } from 'react';

const LazyLangSelector = lazy(() => import('./LangSelector'));

const LangSelector = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLangSelector {...props} />
  </Suspense>
);

export default LangSelector;
