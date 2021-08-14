import React from 'react';

import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
  useHistory,
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactRouteProps {
  needAuth?: false;
}

const Route: React.FC<RouteProps> = ({ children, needAuth, ...rest }) => {
  const { user } = useAuth();
  const history = useHistory();

  if (needAuth && !user) {
    history.push('/');
  }

  return <ReactRoute {...rest}>{children}</ReactRoute>;
};

export default Route;
