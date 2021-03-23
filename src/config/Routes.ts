import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Projects = lazy(() => import('pages/Projects'));
export const NotFound = lazy(() => import('pages/NotFound'));

export const Routes = [
  {
    id: 'home',
    path: '/',
    component: Home,
  },
  {
    id: 'projects',
    path: '/projects',
    component: Projects,
  },
];
