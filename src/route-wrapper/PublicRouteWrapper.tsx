import React from 'react';

import { IRoute } from '../common/types/common';

type RouteWrapper = IRoute;

const PublicRouteWrapper = ({
  layout: Layout,
  component: Component,
  ...props
}: RouteWrapper) => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default PublicRouteWrapper;
