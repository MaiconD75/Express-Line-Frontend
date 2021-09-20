import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Deliveries from '../pages/Deliveries';
import Deliverymen from '../pages/Deliverymen';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Origins from '../pages/Origins';
import Route from './Route';
import Recipients from '../pages/Recipients';
import ForgottenPassword from '../pages/ForgottenPassword';
import SendEmail from '../pages/SendEmail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route
        path="/forgotten-password/:token"
        exact
        component={ForgottenPassword}
      />
      <Route path="/send-email" exact component={SendEmail} />
      <Route path="/deliveries" needAuth exact component={Deliveries} />
      <Route path="/deliverymen" needAuth exact component={Deliverymen} />
      <Route path="/origins" needAuth exact component={Origins} />
      <Route path="/Recipients" needAuth exact component={Recipients} />
      <Route path="/*" component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
