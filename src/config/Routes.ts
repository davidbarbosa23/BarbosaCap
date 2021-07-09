import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Projects = lazy(() => import('pages/Projects'));
const ProjectsFGC = lazy(() => import('pages/Projects/pages/FixedGearCalculator'));
export const NotFound = lazy(() => import('pages/NotFound'));

export const Routes = (
  all: Boolean = true
): Array<{ id: string; path: { [key: string]: string }; Component?: any }> =>
  [
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
    {
      id: 'projectsFGC',
      path: {
        en: '/projects/fixed-gear-calculator',
        es: '/proyectos/calculadora-fixed-gear',
      },
      Component: ProjectsFGC,
    },
  ].map((route) => (all ? route : { id: route.id, path: route.path }));
