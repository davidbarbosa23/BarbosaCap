import React, { FunctionComponent, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppLanguage } from 'constant/app-languages';

import LocalizedRouter from 'components/AppLocalizations/LocalizedRouter';
import LocalizedSwitch from 'components/AppLocalizations/LocalizedSwitch';
import AppLayout from 'components/AppLayout';

import { appStrings } from 'config/i18n';

const Wrapper: FunctionComponent = ({ children }) => (
  <LocalizedRouter RouterComponent={BrowserRouter} languages={AppLanguage} appStrings={appStrings}>
    <AppLayout>
      <LocalizedSwitch>
        <Route path="*">{children}</Route>
      </LocalizedSwitch>
    </AppLayout>
  </LocalizedRouter>
);

// create a customRender that wraps the UI in a memory Router
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
