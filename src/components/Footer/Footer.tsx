import React from 'react';
import { Box, Grid } from '@mui/material';

import { style } from './style';

const Footer = () => {
  return (
    <Box sx={style.footerContainer}>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          1
        </Grid>
        <Grid item lg={4}>
          2
        </Grid>
        <Grid item lg={4}>
          3
        </Grid>
        <Grid item lg={4}>
          4
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
