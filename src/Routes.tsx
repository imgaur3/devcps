import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { CreationPlanRoute } from 'view/Themes/CreationPlan/Routes';
import DiscoverGodRoute from 'view/Themes/DiscoverGod';
import QuranRoute from 'view/Themes/Quran';

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
const AdminRoutes = [
  HomeRoute,
  AdminRoute,
  ThemeRoute,
  DiscoverGodRoute,
  CreationPlanRoute,
  QuranRoute,
];

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
