import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppLayout } from 'components/Layouts/AppLayout';

import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AppLayout className='Home'>
      <div className='container'>
        <h1>{t('home.title')}</h1>
        <code>-&gt;</code>
      </div>
    </AppLayout>
  );
};

export default Home;
