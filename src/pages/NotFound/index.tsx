import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import AppLayout from 'layouts/AppLayout';

import styles from './styles.module.scss';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t('notfound.title')} | {process.env.REACT_APP_SITE_TITLE}
        </title>
      </Helmet>
      <AppLayout className={`${styles.notFound} container`}>
        <div className={styles.container}>
          <h1>{t('notfound.title')}</h1>
          <p>{t('notfound.desc')}</p>
          <Link className="btn" to={`/${t('lang')}`}>
            {t('menu.home')}
          </Link>
        </div>
      </AppLayout>
    </>
  );
};

export default NotFound;
