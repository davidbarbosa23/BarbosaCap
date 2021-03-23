import { pathToRegexp, compile } from 'path-to-regexp';

export const langUrl = (locale: string, path: string) => {
  const ROUTE = '/:locale/:path*';
  const definePath = compile(ROUTE);
  const routeComponents = pathToRegexp(ROUTE).exec(path);

  let subPaths = null;
  if (routeComponents && routeComponents[2]) {
    subPaths = routeComponents[2].split('/');
  }

  return definePath({
    locale,
    path: subPaths,
  });
};
