import React from 'react';
import { useTranslation } from 'react-i18next';

import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='Home'>
      {t('hello.label')}
      <code>-&gt;</code>
    </div>
  );
};

export default Home;
