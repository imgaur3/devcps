import React from 'react';
import { Box, Grid } from '@mui/material';

import { style } from './style';

const Footer = () => {
  return (
    <Box sx={style.footerContainer}>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          1
        </Grid>
        <Grid item lg={3}>
          2
        </Grid>
        <Grid item lg={3}>
          3
        </Grid>
        <Grid item lg={3}>
          4
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
