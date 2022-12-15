import React from 'react';
import { Navigate } from 'react-router-dom';

import { IRoute } from '../common/types/common';

type RouteWrapper = IRoute;

const AuthenticatedRouteWrapper = ({
  layout: Layout,
  component: Component,
  ...props
}: RouteWrapper) => {
  const isLogged = true;
  const RouteWrapper = () => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
  return isLogged ? <RouteWrapper /> : <Navigate to="/" />;
};

export default AuthenticatedRouteWrapper;
