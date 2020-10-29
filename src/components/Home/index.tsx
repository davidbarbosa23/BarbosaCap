import React from 'react';

import { AppLayout } from 'components/Layouts/AppLayout';
import Prologue from './sections/Prologue';
import AboutMe from './sections/AboutMe';

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
