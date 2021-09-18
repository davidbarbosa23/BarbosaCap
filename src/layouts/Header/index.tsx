import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Logo from 'assets/img/logo_barbosacap.svg';

import Navbar from '../Navbar';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <header className={styles.header}>
      <Link to={`/${language}`} className={styles.brand}>
        <img src={Logo} alt={`${process.env.REACT_APP_NAME} Logo`} />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
