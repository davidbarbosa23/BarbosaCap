import React, { Suspense } from 'react';

import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import i18n from 'config/I18n';
import { defaultLang } from 'config/Langs';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={null}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Switch>
              <Route path="/:locale" component={App} />
              <Redirect to={`/${defaultLang}`} />
            </Switch>
          </Router>
        </I18nextProvider>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
