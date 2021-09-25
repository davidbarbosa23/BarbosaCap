import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppLanguages } from 'constant/app-languages';
import { DarkModeProvider } from 'contexts/darkModeContext';

import LocalizedRouter from 'components/AppLocalizations/LocalizedRouter';
import LocalizedSwitch from 'components/AppLocalizations/LocalizedSwitch';
import AppLayout from 'components/AppLayout';

import { appStrings } from 'config/i18n';

const Wrapper: FC = ({ children }) => (
  <DarkModeProvider>
    <LocalizedRouter
      RouterComponent={BrowserRouter}
      languages={AppLanguages}
      appStrings={appStrings}
    >
      <AppLayout>
        <LocalizedSwitch>
          <Route path="*">{children}</Route>
        </LocalizedSwitch>
      </AppLayout>
    </LocalizedRouter>
  </DarkModeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
