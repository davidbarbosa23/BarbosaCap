import React from 'react';

import { useTranslation } from 'react-i18next';

import { AppLayout } from 'layouts/AppLayout';

import './Projects.scss';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AppLayout className="Projects">
      <div className="container">
        <h1>{t('projects.title')}</h1>
      </div>
    </AppLayout>
  );
};

export default Projects;
