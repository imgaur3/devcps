import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { gallery1, gallery2, gallery3 } from 'assets';

import { style } from './style';

type props = {
  deviceType?: any;
};
const cardData = [
  {
    id: '1',
    image: gallery1,
    title:
      'I thank God for giving us His biggest blessing in the form of Maulana who made our lives not…',
    description: 'DR. RAJAT MALHOTRA, New Delhi',
  },
  {
    id: '2',
    image: gallery2,
    title:
      'Maulana was and will remain my greatest well-wisher. He helped me in strengthening my…',
    description: 'FARAZ KHAN, New Delhi',
  },
  {
    id: '3',
    image: gallery3,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tellus et lorem egestas…',
    description: 'XYZ, New Delhi',
  },
];
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
const ArticleCarosuel = ({ deviceType }: props) => {
  return (
    <Box sx={style.carouselContainer}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {cardData.map((item: any) => (
          <Box sx={style.learnCardBox} key={`${item.id}`}>
            <Box></Box>
            <Box sx={style.cardImageStyle}>
              <img src={item.image} alt="card-image" />
            </Box>
            <Box sx={{ padding: '10px 30px 10px 30px', textAlign: 'center' }}>
              <Typography sx={style.cardBoxTitle}>{item.title}</Typography>
              <Typography sx={style.cardBoxDescription}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ArticleCarosuel;
