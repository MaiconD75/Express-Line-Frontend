import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Deliveries from '../pages/Deliveries';
import Deliverymen from '../pages/Deliverymen';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Origins from '../pages/Origins';
import Route from './Route';
import Recipients from '../pages/Recipients';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/Deliveries" needAuth exact component={Deliveries} />
      <Route path="/Deliverymen" needAuth exact component={Deliverymen} />
      <Route path="/Origins" needAuth exact component={Origins} />
      <Route path="/Recipients" needAuth exact component={Recipients} />
      <Route path="/*" component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
