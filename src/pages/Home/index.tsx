import React from 'react';

import { AppLayout } from 'layouts/AppLayout';

import AboutMe from './components/AboutMe';
import Prologue from './components/Prologue';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <AppLayout className={styles.Home}>
      <Prologue />
      <AboutMe />
    </AppLayout>
  );
};

export default Home;
