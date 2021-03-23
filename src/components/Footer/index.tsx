import React from 'react';
// import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  // const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className='copy'>
        © {currentYear} {process.env.REACT_APP_NAME}
      </div>
    </footer>
  );
};

export default Footer;
