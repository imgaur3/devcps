import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { SliderHeader, WrapperButton } from 'components';
import { initiative, sec2, sec3 } from 'assets';

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
      <Box sx={style.thirdSectionContainer}>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={12} md={12} xs={12} sx={style.centerImage}>
            <Box>
              <img src={sec2} alt="Sec2-image" />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box sx={{ padding: 3 }}>
                <Typography sx={style.sectionHeading}>
                  MAULANA WAHIDUDDIN KHAN
                </Typography>
                <Typography sx={style.sectionDescription}>
                  ISLAMIC SCHOLAR I SPIRITUAL GUIDE I AMBASSADOR OF PEACE
                </Typography>
                <Typography sx={style.sectionMoreDescription}>
                  was an Islamic Scholar, Spiritual Guide and Ambassador of
                  Peace. He prepared a treasuretrove of wisdom in the form of
                  books, articles and video and audio lectures demonstrating the
                  relevance of Islam in the modern idiom.
                </Typography>
                <WrapperButton title={'LEARN MORE'} sx={style.learnButton} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.secondSectionContainer}>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Typography sx={style.sectionHeading}>CPS VISION</Typography>
              <Typography sx={style.sectionMoreDescription}>
                The vision of CPS International is to reengineer and transform
                the minds of individuals so that they may live in the love of
                God. This love of God finds reflection in the love and
                well-wishing of human beings.
              </Typography>
              <WrapperButton title={'LEARN MORE'} sx={style.learnButton} />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box>
                <img src={sec3} alt="Sec2-image" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.thirdSectionContainer}>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={12} md={12} xs={12} sx={style.centerImage}>
            <Box>
              <img src={initiative} alt="Sec2-image" />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box sx={{ padding: 3 }}>
                <Typography sx={style.sectionHeading}>CPS MISSION</Typography>
                <Typography sx={style.sectionMoreDescription}>
                  CPS helps people discover their Creator to usher in an
                  intellectual revolution in them on God-oriented lines. This is
                  reflected internally in developing positive personalities by
                  learning the art of conversion through mind-based spirituality
                  and externally in maintaining peace for the sake of peace so
                  they can strive toward their positive goals to become
                  contributors to peace and progress in society. CPS helps
                  people discover their Creator to usher in an intellectual
                  revolution in them on God-oriented lines. This is reflected
                  internally in developing positive personalities by learning
                  the art of conversion through mind-based spirituality and
                  externally in maintaining peace for the sake of peace so they
                  can strive toward their positive goals to become contributors
                  to peace and progress in society.
                </Typography>
                <WrapperButton
                  title={'CPS PEACE INITIATIVE'}
                  sx={style.peaceButton}
                />
                <WrapperButton
                  title={'CPS QURAN FOR ALL INITIATIVE'}
                  sx={style.initiativeButton}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>{/* <CardSlider /> */}</Box>
      <Footer />
    </Box>
  );
};

export default Home;
