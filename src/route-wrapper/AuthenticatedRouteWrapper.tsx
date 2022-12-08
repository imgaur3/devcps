import React from 'react';
import { Navigate } from 'react-router-dom';

import { IRoute } from '../common/types/common';

type RouteWrapper = IRoute;

const AuthenticatedRouteWrapper = ({
  layout: Layout,
  component: Component,
  ...props
}: RouteWrapper) => {
  const loggedIn = false;
  console.log('AUTHENTICATE ROUTE MAPPER'); //eslint-disable-line
  const RouteWrapper = () => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
  return loggedIn ? <RouteWrapper /> : <Navigate to="/signup" />;
};

export default AuthenticatedRouteWrapper;
