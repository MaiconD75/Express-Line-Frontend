import React, { useEffect } from 'react';

import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
  useHistory,
} from 'react-router-dom';

import api from '../services/api';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactRouteProps {
  needAuth?: boolean;
}

const Route: React.FC<RouteProps> = ({
  children,
  needAuth = false,
  ...rest
}) => {
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${user.token}`;
  }, [user.token]);

  if (needAuth && !user) {
    history.push('/');
  }

  return <ReactRoute {...rest}>{children}</ReactRoute>;
};

export default Route;
