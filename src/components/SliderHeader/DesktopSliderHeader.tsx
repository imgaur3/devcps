import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Paper } from '@mui/material';

import { banner1, banner2 } from 'assets';

import { style } from './style';
const img1 = banner1;
const img2 = banner2;

const DesktopSliderHeader = () => {
  const items = [
    {
      name: img1,
      key: 'image1',
    },
    {
      name: img2,
      key: 'image2',
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
      <Box sx={style.sliderImagesContainer}>
        <img src={props.item.name} />
      </Box>
    </Paper>
  );
}

export default DesktopSliderHeader;
