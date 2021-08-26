import React from 'react';

import {
  Redirect,
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactRouteProps {
  needAuth?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  needAuth = false,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return needAuth === !!user.token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: needAuth ? '/' : '/Deliveries',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
