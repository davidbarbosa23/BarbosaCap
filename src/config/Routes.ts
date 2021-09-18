import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Projects = lazy(() => import('pages/Projects'));
// const ProjectsFGC = lazy(() => import('pages/Projects/pages/FixedGearCalculator'));
export const NotFound = lazy(() => import('pages/NotFound'));

export const routes: Array<{ id: string; path: { [key: string]: string }; Component: React.FC }> = [
  {
    id: 'home',
    path: {
      en: '/',
      es: '/',
    },
    Component: Home,
  },
  {
    id: 'projects',
    path: {
      en: '/projects',
      es: '/proyectos',
    },
    Component: Projects,
  },
  // {
  //   id: 'projectsFGC',
  //   path: {
  //     en: '/projects/fixed-gear-calculator',
  //     es: '/proyectos/calculadora-fixed-gear',
  //   },
  //   // Component: ProjectsFGC,
  // },
];

export const routesList: { [key: string]: { [key: string]: string } } = routes.reduce(
  (acc, { id, path }) => ({
    ...acc,
    [id]: path,
  }),
  {}
);
