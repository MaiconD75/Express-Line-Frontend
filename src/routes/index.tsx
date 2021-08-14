import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" exact component={SignUp} />
    </Switch>
  );
};

export default Routes;
