import React from 'react';
import { Box } from '@mui/material';

import { Header } from 'components';
import { themesSubCover } from 'assets';

import { style } from './style';

const Quran = () => {
  return (
    <Box sx={style.quranContainer}>
      <Box>
        <Header image={themesSubCover} text={'QURAN'} />
      </Box>
    </Box>
  );
};

export default Quran;
