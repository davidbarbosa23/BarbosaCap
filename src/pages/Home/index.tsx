import React from 'react';

import AppLayout from 'layouts/AppLayout';

import styles from './styles.module.scss';

const Home: React.FC = () => {
  return <AppLayout className={styles.home}>Home</AppLayout>;
};

export default Home;
