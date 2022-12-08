/* eslint-disable array-callback-return */
import React from 'react';
import { RouteObject } from 'react-router-dom';

import PublicRouteWrapper from '../../route-wrapper/PublicRouteWrapper';
import AuthenticatedRouteWrapper from '../../route-wrapper/AuthenticatedRouteWrapper';
import { IRoute } from '../types/common';

type AppRoutes = {
  PublicRoutes?: IRoute[];
  AdminRoutes?: IRoute[];
};

export const createRoutes = (routes: AppRoutes) => {
  const { PublicRoutes = [], AdminRoutes = [] } = routes;

  const allRoutes: RouteObject[] = [];

  PublicRoutes.map((route) => {
    allRoutes.push({
      path: route.path,
      element: <PublicRouteWrapper {...route} />,
    });
  });

  AdminRoutes.map((route) => {
    allRoutes.push({
      path: route.path,
      element: <AuthenticatedRouteWrapper {...route} />,
    });
  });

  return allRoutes;
};
