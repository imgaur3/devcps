import React from 'react';
import { Box, Typography } from '@mui/material';

import { style } from './style';

type props = {
  images: any;
  title: string;
  description?: string;
};

const ThemeCard = ({ images, title, description }: props) => {
  return (
    <Box sx={style.cardThemeContainer}>
      <Box sx={style.cardBox}>
        <Box sx={style.cardBoxImage}>
          <img src={images} alt="CardImage" />
        </Box>
        <Box sx={style.cardBoxContent}>
          <Typography sx={style.cardBoxTitle}>{title}</Typography>
          <Typography sx={style.cardBoxDescription}>{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeCard;
