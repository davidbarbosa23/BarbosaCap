import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Navbar from 'components/Navbar';

import Logo from 'assets/img/logo_barbosacap.svg';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Link to={`/${t('lang')}`} className={styles.brand}>
        <img src={Logo} alt={`${process.env.REACT_APP_NAME} Logo`} />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
