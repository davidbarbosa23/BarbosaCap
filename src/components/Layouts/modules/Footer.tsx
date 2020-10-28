import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer>
      {t('share')}
    </footer>
  );
};

export default Footer;
