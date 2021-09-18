import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from 'constant/app-routes';
import { AppRouteTitles } from 'constant/app-routes-titles';
import { useIntl } from 'react-intl';

const Navigation: React.FC = () => {
  const { formatMessage, locale } = useIntl();

  const localizeRouteKey = (path: string) => `/${locale}${formatMessage({ id: path })}`;

  return (
    <ul>
      {(Object.keys(AppRoute) as Array<keyof typeof AppRoute>).map((elem) => (
        <li key={elem}>
          <NavLink exact to={localizeRouteKey(AppRoute[elem])}>
            {formatMessage({ id: AppRouteTitles.get(AppRoute[elem]) || '' })}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
