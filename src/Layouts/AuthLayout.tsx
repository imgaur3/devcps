import React, { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { ROLE } from '../common/utils/constants';

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const { pathname } = useLocation();
  const loggedIn = false;
  const role = 'ADMIN';
  return pathname === '/' ? (
    <Navigate to="/signup" />
  ) : loggedIn && pathname === '/signup' && role === ROLE.ADMIN ? (
    <Navigate to="/home" />
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
