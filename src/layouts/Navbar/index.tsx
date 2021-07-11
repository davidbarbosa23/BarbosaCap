import React from 'react';

import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { langsFlag, langsList, langsName } from 'config/Langs';
import { routesList } from 'config/Routes';

import styles from './styles.module.scss';

const Navbar: React.FC = (props) => {
  const { t } = useTranslation();

  const {
    state: { lang, pathId },
  }: { state: any } = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/${lang}`} activeClassName={styles.active}>
            {t('menu.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${lang}${routesList['projects'][lang]}`} activeClassName={styles.active}>
            {t('menu.projects')}
          </NavLink>
        </li>
        <li>
          <ul>
            {langsList.map((lang) => (
              <li key={lang}>
                <NavLink
                  to={`/${lang}${pathId && pathId !== 'home' ? routesList[pathId][lang] : ''}`}
                  activeClassName={styles.active}
                >
                  {langsFlag[lang]}
                  {langsName[lang]}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
