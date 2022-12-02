import { Box, CircularProgress } from '@mui/material';
import React from 'react';

import { style } from './style';
const Loader = () => {
  return (
    <Box sx={style.box}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
