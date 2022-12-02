import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

type props = {
  allowedRoles: any;
};

const RequireAuth = ({ allowedRoles }: props) => {
  const user = localStorage.getItem('user');
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
