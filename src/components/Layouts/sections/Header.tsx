import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import Logo from 'assets/img/logo_barbosacap.svg';

const Header: React.FC = () => {
  return (
    <header>
      <Link to='/' className='brand'>
        <img src={Logo} alt={`${process.env.REACT_APP_NAME} Logo`} />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
