import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const UserLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default UserLayout;
