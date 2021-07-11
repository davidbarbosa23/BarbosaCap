import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, RouteComponentProps, Switch, useParams } from 'react-router-dom';

import { defaultLang, langsList, tAllowedLangs } from 'config/Langs';
import { NotFound, routes } from 'config/Routes';

interface IParams {
  locale: tAllowedLangs;
}

const App: React.FC<RouteComponentProps> = ({ match }) => {
  const { i18n } = useTranslation();
  const { locale }: IParams = useParams();

  useEffect(() => {
    i18n.changeLanguage(locale ?? defaultLang);
    // eslint-disable-next-line
  }, [locale]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: locale || defaultLang }}>
        <title>{process.env.REACT_APP_SITE_TITLE}</title>
        <meta name="description" content={process.env.REACT_APP_SITE_DESC}></meta>
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
              return <Component />;
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
