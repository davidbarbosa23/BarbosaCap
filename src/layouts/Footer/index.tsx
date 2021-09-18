import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      © {currentYear} {process.env.REACT_APP_NAME}
    </footer>
  );
};

export default Footer;
