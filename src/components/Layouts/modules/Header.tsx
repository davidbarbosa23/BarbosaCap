import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import Logo from 'assets/img/BarbosaCap_Logo.svg';

const Header: React.FC = () => {
  return (
    <header>
      <Link to='/' className='brand'>
        <img src={Logo} alt='BarbosaCap Logo' />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
