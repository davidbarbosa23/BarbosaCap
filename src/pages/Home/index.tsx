import React from 'react';

import { AppLayout } from 'layouts/AppLayout';

import AboutMe from './components/AboutMe';
import Prologue from './components/Prologue';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <AppLayout className="Home">
      <Prologue />
      <AboutMe />
    </AppLayout>
  );
};

export default Home;
