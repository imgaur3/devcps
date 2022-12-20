import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import { card1, card2 } from 'assets';
import { WrapperButton } from 'components';

import { style } from './style';

type props = {
  deviceType: any;
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CarouselSlider = ({ deviceType }: props) => {
  return (
    <Box sx={style.carouselContainer}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== 'mobile' ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <Box sx={style.cardBox}>
          <Box sx={style.cardImage}>
            <img src={card1} alt="check" />
          </Box>
          <Box sx={style.cardContent}>
            <WrapperButton title={'DISCOVER GOD'} sx={style.cardButton} />
            <Typography sx={style.cardText}>
              The Quran tells us that man was created so that
            </Typography>
          </Box>
        </Box>
        <Box sx={style.cardBox}>
          <Box sx={style.cardImage}>
            <img src={card2} alt="check" />
          </Box>
          <Box sx={style.cardContent}>
            <WrapperButton title={'DISCOVER GOD'} sx={style.cardButton} />
            <Typography sx={style.cardText}>
              The Quran tells us that man was created so that
            </Typography>
          </Box>
        </Box>
        <Box sx={style.cardBox}>
          <Box sx={style.cardImage}>
            <img src={card1} alt="check" />
          </Box>
          <Box sx={style.cardContent}>
            <WrapperButton title={'DISCOVER GOD'} sx={style.cardButton} />
            <Typography sx={style.cardText}>
              The Quran tells us that man was created so that
            </Typography>
          </Box>
        </Box>
        <Box sx={style.cardBox}>
          <Box sx={style.cardImage}>
            <img src={card1} alt="check" />
          </Box>
          <Box sx={style.cardContent}>
            <WrapperButton title={'DISCOVER GOD'} sx={style.cardButton} />
            <Typography sx={style.cardText}>
              The Quran tells us that man was created so that
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </Box>
  );
};

export default CarouselSlider;
