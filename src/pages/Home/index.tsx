import React from 'react';

import { AppLayout } from 'Layouts/AppLayout';
import Prologue from './components/Prologue';
import AboutMe from './components/AboutMe';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <AppLayout className='Home'>
      <Prologue />
      <AboutMe />
    </AppLayout>
  );
};

export default Home;
