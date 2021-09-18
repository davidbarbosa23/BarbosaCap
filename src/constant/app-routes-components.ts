import Home from 'pages/Home';
import Projects from 'pages/Projects';

import { AppRoute } from './app-routes';

export const AppRouteComponents = new Map([
  [AppRoute.Home, Home],
  [AppRoute.Projects, Projects],
]);
