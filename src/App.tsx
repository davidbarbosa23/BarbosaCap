import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './i18n';

// Components
import LangSelector from './components/LangSelector/LangSelector';
import Home from './components/Home/Home';
// const Home = React.lazy(() => import('./components/Home/Home'));

function App(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <LangSelector />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
