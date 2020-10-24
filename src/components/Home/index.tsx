import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppLayout } from './../Layouts/AppLayout';

import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AppLayout className='Home'>
      {t('hello.label')}
      <code>-&gt;</code>
    </AppLayout>
  );
};

export default Home;
