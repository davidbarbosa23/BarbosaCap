import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Projects = lazy(() => import('pages/Projects'));
const ProjectsFGC = lazy(() => import('pages/Projects/pages/FixedGearCalculator'));
export const NotFound = lazy(() => import('pages/NotFound'));

export const Routes = () => {
  return [
    {
      id: 'home',
      path: '/',
      Component: Home,
    },
    {
      id: 'projects',
      path: '/projects',
      Component: Projects,
    },
    {
      id: 'projectsFGC',
      path: '/projects/fixed-gear-calculator',
      Component: ProjectsFGC,
    },
  ];
};
