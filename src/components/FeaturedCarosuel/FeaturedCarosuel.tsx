import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import { article1, article2 } from 'assets';

import { style } from './style';

type props = {
  deviceType?: any;
};
const cardData = [
  {
    id: '1',
    image: article1,
    title: 'COUNTERING VIOLENT EXTREMISM',
    description: 'Case of Ideology Vs Counter-Ideology',
  },
  {
    id: '2',
    image: article2,
    title: 'CULTURE OF PEACE',
    description: 'Developing God Oriented Personalities',
  },
  {
    id: '3',
    image: article1,
    title: 'INTERFAITH DIALOGUE FOR PEACE-MAKING',
    description: 'Peaceful Dialogue for Mutual Learning',
  },
  {
    id: '4',
    image: article1,
    title: 'INTERFAITH DIALOGUE FOR PEACE-MAKING',
    description: 'Peaceful Dialogue for Mutual Learning',
  },
  {
    id: '5',
    image: article1,
    title: 'INTERFAITH DIALOGUE FOR PEACE-MAKING',
    description: 'Peaceful Dialogue for Mutual Learning',
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
const FeaturedCarosuel = ({ deviceType }: props) => {
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
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {cardData.map((item: any) => (
          <Box sx={style.learnCardBox} key={`${item.id}`}>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt="green iguana"
            />
            <CardContent sx={{ padding: 3 }}>
              <Typography gutterBottom component="div" sx={style.cardLanguage}>
                URDU | VIDEO{' '}
                <i
                  className="fa fa-video-camera"
                  aria-hidden="true"
                  style={{ color: '#B81B1B' }}
                ></i>
              </Typography>
              <Typography sx={style.dateStyles}>01 JAN, 2006</Typography>
              <Typography gutterBottom component="div" sx={style.cardTitle}>
                {item.title}{' '}
              </Typography>
              <Typography variant="body2" sx={style.descStyles}>
                {item.description}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FeaturedCarosuel;
