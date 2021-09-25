import React, { ComponentType, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRoute } from 'constant/app-routes';
import { AppRouteComponents } from 'constant/app-routes-components';
import { AppLanguages } from 'constant/app-languages';
import { DarkModeProvider } from 'contexts/darkModeContext';

import Errors from 'pages/Errors';

import LocalizedRouter from 'components/AppLocalizations/LocalizedRouter';
import LocalizedSwitch from 'components/AppLocalizations/LocalizedSwitch';
import AppLayout from 'components/AppLayout';

import { appStrings } from 'config/i18n';

function App(): JSX.Element {
  return (
    <DarkModeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <LocalizedRouter
          RouterComponent={BrowserRouter}
          languages={AppLanguages}
          appStrings={appStrings}
        >
          <AppLayout>
            <LocalizedSwitch>
              {(Object.keys(AppRoute) as Array<keyof typeof AppRoute>).map((elem) => {
                const Component = AppRouteComponents.get(AppRoute[elem]) as ComponentType;
                return (
                  <Route key={elem} exact path={AppRoute[elem]}>
                    <Component />
                  </Route>
                );
              })}
              <Route path="*">
                <Errors />
              </Route>
            </LocalizedSwitch>
          </AppLayout>
        </LocalizedRouter>
      </Suspense>
    </DarkModeProvider>
  );
}

export default App;
