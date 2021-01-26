import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import history from '../services/history';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
