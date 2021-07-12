import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, RouteComponentProps, Switch, useParams } from 'react-router-dom';

import { defaultLang, langsList, tAllowedLangs } from 'config/Langs';
import { NotFound, routes } from 'config/Routes';

import AppLayout from 'layouts/AppLayout';

interface IParams {
  locale: tAllowedLangs;
}

const App: React.FC<RouteComponentProps> = ({ match }) => {
  const { i18n, t } = useTranslation();
  const { locale }: IParams = useParams();

  useEffect(() => {
    i18n.changeLanguage(locale ?? defaultLang);
    // eslint-disable-next-line
  }, [locale]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: locale || defaultLang }}>
        <title>{process.env.REACT_APP_SITE_TITLE}</title>
        <meta name="description" content={t(`home.description`)}></meta>
      </Helmet>
      <Switch>
        {!langsList.includes(locale) && <Redirect to={`/${defaultLang + '/' + locale}`} />}
        {routes.map(({ id, path, Component }) => (
          <Route
            exact
            key={id}
            path={`${match.url}${locale in path ? path[locale] : path.en}`}
            render={({ location }) => {
              location.state = { lang: locale, pathId: id };
              return (
                <>
                  {id !== 'home' && (
                    <Helmet>
                      <title>
                        {t(`${id}.title`)} | {process.env.REACT_APP_SITE_TITLE}
                      </title>
                      <meta name="description" content={t(`${id}.description`)}></meta>
                    </Helmet>
                  )}
                  <AppLayout className={id}>
                    <Component />
                  </AppLayout>
                </>
              );
            }}
          />
        ))}
        <Route
          render={({ location }) => {
            location.state = { lang: locale };
            return <NotFound />;
          }}
        />
      </Switch>
    </>
  );
};

export default App;
