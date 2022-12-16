import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { SliderHeader, WrapperButton } from 'components';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { style } from './style';

const Home = () => {
  return (
    <Box sx={style.homeContainer}>
      <Navbar />
      <Box sx={style.sliderContainer}>
        <SliderHeader />
      </Box>
      <Box sx={style.secondSectionContainer}>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Typography sx={style.sectionHeading}>
                MAULANA WAHIDUDDIN KHAN
              </Typography>
              <Typography sx={style.sectionDescription}>
                ISLAMIC SCHOLAR I SPIRITUAL GUIDE I AMBASSADOR OF PEACE
              </Typography>
              <Typography sx={style.sectionMoreDescription}>
                was an Islamic Scholar, Spiritual Guide and Ambassador of Peace.
                He prepared a treasuretrove of wisdom in the form of books,
                articles and video and audio lectures demonstrating the
                relevance of Islam in the modern idiom.
              </Typography>
              <WrapperButton title={'LEARN MORE'} sx={style.learnButton} />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box sx={style.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/n0AIGEI7b9U"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
