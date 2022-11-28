/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
//@ts-ignore
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

import alrisala from '../../assets/images/al-risala.jpg';
import urdu from '../../assets/images/urdu.png';
import WrapperButton from '../Wrapper/WrapperButton';

type props = {
  img?: any;
};
const SampleNextArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

const Book = ({ img }: props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div style={{ width: '300px' }}>
          <img
            style={{
              width: '300px',
              height: 'auto',
              textAlign: 'center',
              margin: 'auto',
              objectFit: 'contain',
              padding: 2,
            }}
            src={alrisala}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <WrapperButton
              name="DOWNLOAD"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
            <WrapperButton
              name="READ ONLINE"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
          </Box>
        </div>
        <div style={{ width: '300px' }}>
          <img
            style={{
              width: '300px',
              height: 'auto',
              textAlign: 'center',
              margin: 'auto',
              objectFit: 'contain',
              padding: 2,
            }}
            src={urdu}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <WrapperButton
              name="DOWNLOAD"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
            <WrapperButton
              name="READ ONLINE"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
          </Box>
        </div>
        <div style={{ width: '300px' }}>
          <img
            style={{
              width: '300px',
              height: 'auto',
              textAlign: 'center',
              margin: 'auto',
              objectFit: 'contain',
              padding: 2,
            }}
            src={alrisala}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <WrapperButton
              name="DOWNLOAD"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
            <WrapperButton
              name="READ ONLINE"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
          </Box>
        </div>
        <div style={{ width: '300px' }}>
          <img
            style={{
              width: '300px',
              height: 'auto',
              textAlign: 'center',
              margin: 'auto',
              objectFit: 'contain',
              padding: 2,
            }}
            src={img}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <WrapperButton
              name="DOWNLOAD"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
            <WrapperButton
              name="READ ONLINE"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
          </Box>
        </div>
        <div style={{ width: '300px' }}>
          <img
            style={{
              width: '300px',
              height: 'auto',
              textAlign: 'center',
              margin: 'auto',
              objectFit: 'contain',
              padding: 2,
            }}
            src={img}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <WrapperButton
              name="DOWNLOAD"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
            <WrapperButton
              name="READ ONLINE"
              type="submit"
              size="small"
              sx={{
                background: 'transparent',
                color: '#545454',
                border: '1px solid #545454',
                borderRaius: 2,
                '&: hover': {
                  background: '#545454',
                  color: '#fff',
                },
              }}
            />
          </Box>
        </div>
      </Slider>
    </div>
  );
};

export default Book;
