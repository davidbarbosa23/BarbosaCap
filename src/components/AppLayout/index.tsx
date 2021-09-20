import React, { FC } from 'react';
import AppNavigation from 'components/AppNavigation';
import LanguageSwitcher from 'components/AppLocalizations/LanguageSwitcher';

const AppLayout: FC = ({ children }) => (
  <>
    <header>
      <nav>
        <AppNavigation />
        <LanguageSwitcher />
      </nav>
    </header>
    <main>{children}</main>
  </>
);

export default AppLayout;
