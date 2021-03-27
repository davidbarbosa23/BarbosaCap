import React from 'react';

import { useTranslation } from 'react-i18next';

import { flags } from 'config/flags';

import { UseContactShow } from 'contexts/contact';

import LangSelector from './components/LangSelector';
import NavItem from './components/NavItem';
import styles from './styles.module.scss';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { setContactShow } = UseContactShow();

  return (
    <nav className={styles.navbar}>
      <ul>
        {/* <NavItem to={`/${t('lang')}`} content={t('home.menu')} /> */}
        {/* <NavItem to={`/${t('lang')}/projects`} content={t('projects.menu')} /> */}
        <NavItem
          to={null}
          content={t('contact.menu')}
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
