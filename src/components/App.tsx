import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../config/i18n';

// Components
import Home from './Home';
import Projects from './Projects';
import PageNotFound from './PageNotFound';
// const Home = React.lazy(() => import('./components/Home/Home'));

function App(): JSX.Element {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/projects' exact component={Projects} />
      <Route path='*' component={PageNotFound} />
    </Switch>
  );
}

export default App;
