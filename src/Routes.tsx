/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { createRoutes } from './common/utils/route-utils';
import { LogInRoute } from './view/Authentication/LogIn/Routes';
import { SignUpRoute } from './view/Authentication/SignUp/Routes';
import { HomeRoute } from './view/Home/Routes';
const PublicRoutes: any = [SignUpRoute, LogInRoute];
const AdminRoutes = [HomeRoute];
const AppRoutes = () => {
  const loggedIn = true;

  if (loggedIn) {
    const appRoutes: RouteObject[] = createRoutes({
      PublicRoutes,
    });
    return useRoutes(appRoutes);
  } else {
    const appRoutes: RouteObject[] = createRoutes({
      AdminRoutes,
    });

    return useRoutes(appRoutes);
  }
};

const AppRoutesWrapper = () => {
  return <AppRoutes />;
};

export default AppRoutesWrapper;
