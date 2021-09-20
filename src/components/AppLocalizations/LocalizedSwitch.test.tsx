import React, { FunctionComponent, ReactElement } from 'react';
import { render, RenderOptions, RenderResult, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppLanguage } from 'constant/app-languages';

import LocalizedRouter from 'components/AppLocalizations/LocalizedRouter';
import LocalizedSwitch from 'components/AppLocalizations/LocalizedSwitch';

import { appStrings } from 'config/i18n';

const Wrapper: FunctionComponent = ({ children }) => (
  <LocalizedRouter RouterComponent={BrowserRouter} languages={AppLanguage} appStrings={appStrings}>
    <LocalizedSwitch>
      <Route exact path={undefined}>
        {children}
      </Route>
      <Route exact path={['routes.home']}>
        {children}
      </Route>
    </LocalizedSwitch>
    <LocalizedSwitch>Test not valid React element</LocalizedSwitch>
  </LocalizedRouter>
);

// create a customRender that wraps the UI in a memory Router
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: Wrapper, ...options });

test('should test LocalizedSwitch routes', () => {
  customRender(<div>Test routes</div>);
  const renderElement = screen.getByText(/Test routes/i);
  expect(renderElement).toBeInTheDocument();
});
