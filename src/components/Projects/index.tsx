import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppLayout } from './../Layouts/AppLayout';

import './Projects.scss';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AppLayout className='Projects'>
      <h1>{t('projects.title')}</h1>
    </AppLayout>
  );
};

export default Projects;
