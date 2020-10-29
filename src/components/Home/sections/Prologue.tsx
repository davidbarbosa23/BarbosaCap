import React from 'react';
import { useTranslation } from 'react-i18next';

import ProfilePic from 'assets/img/profile_picture.jpg';

const Prologue: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='Prologue'>
      <h1>{t('home.menu')}</h1>
      <img src={ProfilePic} alt='Profile - BarbosaCap' />
    </section>
  );
};

export default Prologue;
