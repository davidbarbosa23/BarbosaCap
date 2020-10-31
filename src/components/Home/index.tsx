import React from 'react';

import { AppLayout } from 'components/Layouts/AppLayout';
import Prologue from './sections/Prologue';
import AboutMe from './sections/AboutMe';
// TODO: add useContext
import Contact from 'components/Layouts/sections/Contact';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <AppLayout className='Home'>
      <Prologue />
      <AboutMe />
      <Contact />
    </AppLayout>
  );
};

export default Home;
