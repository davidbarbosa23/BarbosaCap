import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import { defaultLang } from './config/AppLangs';

import './index.scss';

import App from './App';

import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Switch>
            <Route path='/:locale' component={App} />
            <Redirect to={`/${defaultLang}`} />
          </Switch>
        </Router>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
