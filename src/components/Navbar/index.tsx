import React from 'react';

import { useTranslation } from 'react-i18next';

import { flags } from 'config/flags';
// import { Routes } from 'config/Routes';

import { useContactShow } from 'contexts/contact';

import LangSelector from './components/LangSelector';
import NavItem from './components/NavItem';
import styles from './styles.module.scss';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { setContactShow } = useContactShow();
  // const routes = Routes(false).map(({ id, path }) => ({ id, path: path[t('lang')] }));

  return (
    <nav className={styles.navbar}>
      <ul>
        {/* <NavItem
          to={`/${t('lang')}${routes.find(({ id }) => id === 'projects')?.path}`}
          content={t('menu.projects')}
        /> */}
        <NavItem
          to={null}
          content={t('menu.contact')}
          clickHandler={() => {
            if (setContactShow) setContactShow(true);
          }}
        />
        <NavItem to={null} className={styles.langButton} icon={flags[t('lang')]}>
          <LangSelector />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
