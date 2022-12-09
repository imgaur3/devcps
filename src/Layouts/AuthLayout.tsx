import React, { ReactNode } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// import { ROLE } from '../common/utils/constants';

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  // const { pathname } = useLocation();
  return <>{children}</>;
};

export default AuthLayout;
