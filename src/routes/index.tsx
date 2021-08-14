import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Deliveries from '../pages/Deliveries';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/Deliveries" exact component={Deliveries} />
      <Route path="/*" component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
