import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Navbar from 'components/Navbar';

import Logo from 'assets/img/logo_barbosacap.svg';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header>
      <Link to={`/${t('lang')}`} className='brand'>
        <img src={Logo} alt={`${process.env.REACT_APP_NAME} Logo`} />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
