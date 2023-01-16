import React from 'react';
import { Box, Typography } from '@mui/material';

import { style } from './styles';

type props = {
  image: any;
  text: string;
};

const Header = ({ image, text }: props) => {
  return (
    <Box sx={style.headerContainer}>
      <Box sx={style.headerOverlapImage}>
        <img src={image} alt="image" />
      </Box>
      <Box sx={style.headerOverlapImageText}>
        <Typography style={style.headerMiddleText}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default Header;
