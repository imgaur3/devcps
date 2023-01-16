import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { createRoutes } from './common/utils/route-utils';
import {
  AboutRoute,
  AdminRoute,
  LogInRoute,
  SignUpRoute,
  HomeRoute,
  NotFoundRoute,
  ThemeRoute,
} from './view';

const PublicRoutes = [LogInRoute, SignUpRoute, NotFoundRoute];
const AdminRoutes = [HomeRoute, AboutRoute, AdminRoute, ThemeRoute];

const AppRoutes = () => {
  const appRoutes: RouteObject[] = createRoutes({
    PublicRoutes,
    AdminRoutes,
  });
  return useRoutes(appRoutes);
};

const AppRoutesWrapper = () => {
  return <AppRoutes />;
};

export default AppRoutesWrapper;
