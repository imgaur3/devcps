import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { book1, book2, book3, book4 } from 'assets';

import { style } from './style';
import LoadCard from './Card/Card';

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
const BooksCarosuel = ({ deviceType }: props) => {
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
        <LoadCard
          img={book1}
          title={'TO WORSHIP GOD IS A SPIRITED ACT'}
          desc={
            'Maulana Wahiduddin Khan I The Sunday Guardian I August 24, 2014 According…'
          }
          buttonOne={'DOWNLOAD'}
          buttonTwo={'READ ONLINE'}
        />
        <LoadCard
          img={book2}
          title={'TO WORSHIP GOD IS A SPIRITED ACT'}
          desc={
            'Maulana Wahiduddin Khan I The Sunday Guardian I August 24, 2014 According…'
          }
          buttonOne={'DOWNLOAD'}
          buttonTwo={'READ ONLINE'}
        />
        <LoadCard
          img={book3}
          title={'TO WORSHIP GOD IS A SPIRITED ACT'}
          desc={
            'Maulana Wahiduddin Khan I The Sunday Guardian I August 24, 2014 According…'
          }
          buttonOne={'DOWNLOAD'}
          buttonTwo={'READ ONLINE'}
        />
        <LoadCard
          img={book4}
          title={'TO WORSHIP GOD IS A SPIRITED ACT'}
          desc={
            'Maulana Wahiduddin Khan I The Sunday Guardian I August 24, 2014 According…'
          }
          buttonOne={'DOWNLOAD'}
          buttonTwo={'READ ONLINE'}
        />
      </Carousel>
    </Box>
  );
};

export default BooksCarosuel;
