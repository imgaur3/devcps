import React from 'react';
import { Box, Typography } from '@mui/material';

import { style } from './style';
type props = {
  img: any;
  title: string;
};

const SubThemes = ({ img, title }: props) => {
  return (
    <Box sx={style.subCardContainer}>
      <Box sx={style.subThemesBoxImage}>
        <img src={img} alt="image" />
      </Box>
      <Box>
        <Typography sx={style.absoText}>{title}</Typography>
      </Box>
    </Box>
  );
};

export default SubThemes;
