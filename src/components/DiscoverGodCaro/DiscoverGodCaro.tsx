import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import {
  booksCaro1,
  booksCaro2,
  booksCaro3,
  booksCaro4,
  booksCaro5,
  booksCaro6,
} from 'assets';

import { style } from './style';
import DiscCard from './Card/Card';

type props = {
  deviceType?: any;
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
const DiscoverGodCaro = ({ deviceType }: props) => {
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
        <DiscCard
          img={booksCaro1}
          buttonOne={'READ ONLINE'}
          buttonTwo={'DOWNLOAD'}
        />
        <DiscCard
          img={booksCaro2}
          buttonOne={'READ ONLINE'}
          buttonTwo={'DOWNLOAD'}
        />
        <DiscCard
          img={booksCaro3}
          buttonOne={'READ ONLINE'}
          buttonTwo={'DOWNLOAD'}
        />
        <DiscCard
          img={booksCaro4}
          buttonOne={'READ ONLINE'}
          buttonTwo={'DOWNLOAD'}
        />
        <DiscCard
          img={booksCaro5}
          buttonOne={'READ ONLINE'}
          buttonTwo={'DOWNLOAD'}
        />
        <DiscCard
          img={booksCaro6}
          buttonOne={'READ ONLINE'}
          buttonTwo={'DOWNLOAD'}
        />
      </Carousel>
    </Box>
  );
};

export default DiscoverGodCaro;
