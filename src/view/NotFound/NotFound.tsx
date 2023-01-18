import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { style } from './style';

const NotFound = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/login`;
    navigate(path);
  };
  return (
    <Box sx={style.notFoundContainer}>
      <Typography sx={style.notFoundTitle}>
        404 <br />
        Page not found
      </Typography>
      <Box>
        <Typography sx={style.backToSignUp}>
          Go back to{' '}
          <span onClick={routeChange}>
            <u>Sign In</u>
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
