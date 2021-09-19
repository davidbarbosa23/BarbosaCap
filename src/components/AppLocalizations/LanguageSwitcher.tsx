import React, { FC } from 'react';
import { AppLanguage } from 'constant/app-languages';
import { NavLink, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { appStrings } from 'config/i18n';

const strings: { [key: string]: { [key: string]: string | number } } = appStrings;

const LanguageSwitcher: FC = () => {
  const { pathname } = useLocation();
  const { messages } = useIntl();

  function getMatchingRoute(language: string) {
    /**
     * Get the key of the route the user is currently on
     */
    const route = pathname.substring(3); // remove local part '/en' from the pathname /en/contact
    const routeKey = Object.keys(messages).find((key) => messages[key] === route) as AppLanguage;

    /**
     * Find the matching route for the new language
     */
    const matchingRoute = strings[language][routeKey];

    /**
     * Return localized route
     */
    return `/${language}${matchingRoute}`;
  }

  return (
    <ul>
      {(Object.keys(AppLanguage) as Array<keyof typeof AppLanguage>).map((lang) => (
        <li key={lang}>
          <NavLink to={getMatchingRoute(AppLanguage[lang])}>{AppLanguage[lang]}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitcher;
