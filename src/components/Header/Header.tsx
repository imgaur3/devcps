import React from 'react';
import { Grid, Box } from '@mui/material';

import { style } from './styles';

type props = {
  image: any;
  text: string;
};

const Header = ({ image, text }: props) => {
  function lineBreak(text: any) {
    return text.replace('\r\n', '\n');
  }
  return (
    <Grid container style={style.boxContainer}>
      <Grid item lg={12} md={6} sm={6}>
        <Box
          component="img"
          sx={style.headerHomeImage}
          alt="The house from the offer."
          src={image}
        ></Box>
        <Grid item lg={12} md={6}>
          <Grid item lg={6} sx={style.linearGradient}>
            <Box sx={style.headerText}>{lineBreak(text)}</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
