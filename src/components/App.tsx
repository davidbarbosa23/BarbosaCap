import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
  useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppLangs from 'config/AppLangs';

// Components
// import Home from './Home';
const Home = React.lazy(() => import('./Home'));
const Projects = React.lazy(() => import('./Projects'));
const NotFound = React.lazy(() => import('./NotFound'));

interface IParams {
  locale: string;
}

const App: React.FC<RouteComponentProps> = (props) => {
  const { i18n } = useTranslation();
  const params: IParams = useParams();

  useEffect(() => {
    i18n.changeLanguage(params.locale ?? 'en');
    // eslint-disable-next-line
  }, [params.locale]);

  return (
    <Switch>
      {params.locale in AppLangs ? '' : <Redirect to='/en' />}

      <Route path={`${props.match.url}/`} exact component={Home} />
      <Route path={`${props.match.url}/projects`} exact component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
