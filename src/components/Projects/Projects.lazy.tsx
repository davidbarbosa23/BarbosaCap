import React, { lazy, Suspense } from 'react';

const LazyProjects = lazy(() => import('.'));

const Projects = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProjects {...props} />
  </Suspense>
);

export default Projects;
