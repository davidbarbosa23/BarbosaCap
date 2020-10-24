import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pathToRegexp, compile } from 'path-to-regexp';
import AppLangs from 'config/AppLangs';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className='Navbar'>
      <LangSelector />
      <Link to={`/${t('lang')}`}>{t('home.menu')}</Link>
      <Link to={`/${t('lang')}/projects`}>{t('projects.menu')}</Link>
    </nav>
  );
};

const LangSelector: React.FC = () => {
  const location = useLocation();

  return (
    <div className='LangSelector'>
      {Object.entries(AppLangs).map(([key, value], index) => {
        return (
          <Link key={index} to={langUrl(key, location.pathname)}>
            {value}
          </Link>
        );
      })}
    </div>
  );
};

const langUrl = (locale: string, path: string) => {
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

export default Navbar;
