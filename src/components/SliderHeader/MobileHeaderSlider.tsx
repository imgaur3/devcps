import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Paper } from '@mui/material';

import { mobileBanner1 } from 'assets';

import { style } from './style';
const img1 = mobileBanner1;

const MobileHeaderSlider = () => {
  const items = [
    {
      name: img1,
      key: 'image1',
    },
    {
      name: img1,
      key: 'image1',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props: any) {
  return (
    <Paper>
      <Box sx={style.mobileImagesContainer}>
        <img src={props.item.name} />
      </Box>
    </Paper>
  );
}

export default MobileHeaderSlider;
