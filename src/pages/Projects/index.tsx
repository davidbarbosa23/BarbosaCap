import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { AppLayout } from 'layouts/AppLayout';

import styles from './styles.module.scss';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t('projects.title')} | {process.env.REACT_APP_SITE_TITLE}
        </title>
        <meta name="description" content={'Projects | Experiments'}></meta>
      </Helmet>
      <AppLayout className={`${styles.Projects} container`}>
        <div className={styles.container}>
          <h1>{t('projects.title')}</h1>
        </div>
      </AppLayout>
    </>
  );
};

export default Projects;
