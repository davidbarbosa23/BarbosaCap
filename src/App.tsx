import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from "./components/Home/Home";
// const Home = React.lazy(() => import('./components/Home/Home'));

function App(): JSX.Element {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>);
}

export default App;
