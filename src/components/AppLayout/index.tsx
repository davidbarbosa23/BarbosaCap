import React from 'react';
import Navigation from 'components/Navigation';
import LanguageSwitcher from 'components/i18n/LanguageSwitcher';

const AppLayout: React.FC = ({ children }) => (
  <>
    <header>
      <nav>
        <Navigation />
        <LanguageSwitcher />
      </nav>
    </header>
    <main>{children}</main>
  </>
);

export default AppLayout;
