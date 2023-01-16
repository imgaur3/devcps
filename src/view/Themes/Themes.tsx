import React from 'react';
import { Box } from '@mui/material';

import { Header } from 'components';
import { themes } from 'assets';

import { style } from './style';
const Themes = () => {
  return (
    <Box sx={style.themesContainer}>
      <Header image={themes} text={'THEMES'} />
    </Box>
  );
};

export default Themes;
