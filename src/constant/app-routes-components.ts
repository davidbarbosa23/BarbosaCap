import { lazy } from 'react';
import { AppRoute } from './app-routes';

const Home = lazy(() => import('pages/Home'));
const Projects = lazy(() => import('pages/Projects'));

export const AppRouteComponents = new Map([
  [AppRoute.Home, Home],
  [AppRoute.Projects, Projects],
]);
