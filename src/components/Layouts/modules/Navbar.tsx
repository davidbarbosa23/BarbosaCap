import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => (
  <nav className='Navbar'>
    <LangSelector />
  </nav>
);

const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: any) => {
    console.log(e);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='LangSelector' onChange={changeLanguage}>
      <input type='radio' value='en' name='language' defaultChecked /> English
      <input type='radio' value='es' name='language' /> Español
    </div>
  );
};

export default Navbar;
