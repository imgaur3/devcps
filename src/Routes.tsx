import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import DiscoverGodRoute from 'view/Themes/DiscoverGod';

import { createRoutes } from './common/utils/route-utils';
import {
  AdminRoute,
  LogInRoute,
  SignUpRoute,
  HomeRoute,
  NotFoundRoute,
  ThemeRoute,
} from './view';

const PublicRoutes = [LogInRoute, SignUpRoute, NotFoundRoute];
const AdminRoutes = [HomeRoute, AdminRoute, ThemeRoute, DiscoverGodRoute];

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
