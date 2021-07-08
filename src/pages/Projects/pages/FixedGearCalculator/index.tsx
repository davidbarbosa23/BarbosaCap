import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { AppLayout } from 'layouts/AppLayout';

import BikeCanvas from './components/BikeCanvas';
import styles from './styles.module.scss';

const FixedGearCalculator: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t('projects.fgc.title')} | {process.env.REACT_APP_SITE_TITLE}
        </title>
      </Helmet>
      <AppLayout className={`${styles.FGC} container`}>
        <div className={styles.container}>
          <h1>{t('projects.fgc.title')}</h1>
        </div>
        <BikeCanvas />
      </AppLayout>
    </>
  );
};

export default FixedGearCalculator;
