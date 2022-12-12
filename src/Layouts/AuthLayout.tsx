import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// import { ROLE } from '../common/utils/constants';

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const { pathname } = useLocation();
  return pathname === '/' ? <Navigate to="/signup" /> : <>{children}</>;
};

export default AuthLayout;
