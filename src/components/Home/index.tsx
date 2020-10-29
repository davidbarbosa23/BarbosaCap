import React from 'react';

import { AppLayout } from 'components/Layouts/AppLayout';
import AboutMe from './sections/AboutMe';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <AppLayout className='Home'>
      <AboutMe />
    </AppLayout>
  );
};

export default Home;
