import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const { pathname } = useLocation();
  return pathname === '/' ? <Navigate to="/login" /> : <>{children}</>;
};

export default AuthLayout;
