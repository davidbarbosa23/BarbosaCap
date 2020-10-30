import React, { useState } from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pathToRegexp, compile } from 'path-to-regexp';
import AppLangs from 'config/AppLangs';

import { ReactComponent as FlagUS } from 'assets/img/flag_usa.svg';
import { ReactComponent as FlagES } from 'assets/img/flag_espana.svg';

const flags: {[key: string]: JSX.Element} = {
  en: <FlagUS />,
  es: <FlagES />,
};

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className='navbar'>
      <ul>
        {/* <NavItem to={`/${t('lang')}`} content={t('home.menu')} /> */}
        {/* <NavItem to={`/${t('lang')}/projects`} content={t('projects.menu')} /> */}
        <NavItem to={null} className={'lang-button'} icon={flags[t('lang')]}>
          <LangSelector />
        </NavItem>
      </ul>
    </nav>
  );
};

interface INavItemProps {
  to: string | null;
  content?: string | null;
  icon?: JSX.Element;
  className?: string;
}
const NavItem: React.FC<INavItemProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item' onClick={() => setOpen(!open)}>
      {props.to === null ? (
        <button className={props.className}>
          {props.icon}
          {props.content}
        </button>
      ) : (
        <Link exact={true} activeClassName='active' className={props.className} to={props.to}>
          {props.icon}
          {props.content}
        </Link>
      )}

      {open && props.children}
    </li>
  );
};

const LangSelector: React.FC = () => {
  const location = useLocation();

  return (
    <ul className='lang-selector'>
      {Object.entries(AppLangs).map(([key, value], index) => {
        return (
          <NavItem
            key={index}
            to={langUrl(key, location.pathname)}
            content={value}
            icon={flags[key]}
          ></NavItem>
        );
      })}
    </ul>
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
