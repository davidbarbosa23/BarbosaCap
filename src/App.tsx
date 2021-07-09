import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, RouteComponentProps, Switch, useParams } from 'react-router-dom';

import AppLangs, { defaultLang } from 'config/AppLangs';
import { NotFound, Routes } from 'config/Routes';

import { CurrentPathProvider } from 'contexts/currentPath';

interface IParams {
  locale: 'en' | 'es';
}

const App: React.FC<RouteComponentProps> = (props) => {
  const { i18n } = useTranslation();
  const { locale }: IParams = useParams();

  useEffect(() => {
    i18n.changeLanguage(locale ?? defaultLang);
    // eslint-disable-next-line
  }, [locale]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: locale ?? defaultLang }}>
        <title>{process.env.REACT_APP_SITE_TITLE}</title>
        <meta name="description" content={process.env.REACT_APP_SITE_DESC}></meta>
      </Helmet>
      <Switch>
        {locale in AppLangs ? '' : <Redirect to={`/${defaultLang + '/' + locale}`} />}
        {Routes(true).map(({ id, path, Component }: any) => (
          <Route
            key={id}
            path={`${props.match.url}${locale in path ? path[locale] : path.en}`}
            exact
          >
            <CurrentPathProvider path={{ id, path, lang: locale }}>
              <Component />
            </CurrentPathProvider>
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
