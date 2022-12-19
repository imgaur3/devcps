import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Paper } from '@mui/material';

import { card1 } from 'assets';

import { style } from './style';
const img1 = card1;

const CardSlider = () => {
  const items = [
    {
      name: img1,
      key: 'image1',
    },
    {
      name: img1,
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
        <Box sx={style.cardImage}>
          <img src={props.item.name} />
        </Box>
      </Box>
    </Paper>
  );
}

export default CardSlider;
