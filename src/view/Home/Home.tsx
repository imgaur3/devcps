import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import {
  ArticleCarosuel,
  SliderHeader,
  WrapperButton,
  CarouselSlider,
  VideoCarosuel,
  BooksCarosuel,
  QuranCarousel,
} from 'components';
import { initiative, sec2, sec3, leafback } from 'assets';

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
            <Box sx={style.imageResponsive}>
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
              <Box sx={style.imageResponsive}>
                <img src={sec3} alt="Sec2-image" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.thirdSectionContainer}>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={12} md={12} xs={12} sx={style.centerImage}>
            <Box sx={style.imageResponsive}>
              <img src={initiative} alt="Sec2-image" />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box sx={{ padding: 3, textAlign: 'center' }}>
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
      <Box sx={style.carouselContainer}>
        <Box>
          <Typography sx={style.caroTitle}>WISDOM</Typography>
          <Typography sx={style.caroDesc}>
            QURAN AND SUNNAH PROVIDE WISDOM TO GUIDE MAN FROM THIS LIFE TO THE
            HEREAFTER
          </Typography>
        </Box>
        <CarouselSlider deviceType={undefined} />
        <WrapperButton sx={style.loadMoreButton} title={'VIEW ALL'} />
      </Box>
      <Box sx={style.fourthSectionContainer}>
        <Grid container spacing={2}>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Typography sx={style.thoughtsTitle}>
              <span style={{ fontWeight: 600 }}>THOUGHTS:</span> MAULANA
              WAHIDUDDIN KHAN
            </Typography>
            <Typography sx={style.caroDesc}>
              PRESENTING ISLAM AS IT IS IN THE MODERN IDIOM
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Box>
              <CarouselSlider deviceType={undefined} />
              <WrapperButton
                sx={style.thoughtLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.fifthSectionContainer}>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Typography sx={style.sectionHeading}>QURAN</Typography>
              <Typography sx={style.sectionMoreDescription}>
                Maulana Wahiduddin Khan along with Prof. Farida Khanam made a
                simple, easily-understandable English translation of the Quran.
                It is the most distributed translation in the world and is
                available in more than 30 languages. Small in size and
                lightweight, you can easily carry with you wherever you go.
              </Typography>
              <WrapperButton
                title={'DOWNLOAD QURAN'}
                sx={style.downloadQuranButton}
              />
              <WrapperButton
                title={'READ ONLINE'}
                sx={style.readOnlineButton}
              />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box sx={style.imageResponsive}>
                <img src={sec3} alt="Sec2-image" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.sixSectionContainer}>
        <Grid container>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Typography sx={style.thoughtsTitle}>
              <span style={{ fontWeight: 600 }}>TOPICS</span>
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Box>
              <CarouselSlider />
              <WrapperButton
                sx={style.thoughtLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.sevenContainer}>
        <Grid container>
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <Typography sx={style.caroTitle}>FEATURED ARTICLES</Typography>
          </Grid>
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <ArticleCarosuel />
            <Box sx={{ textAlign: 'center' }}>
              <WrapperButton sx={style.loadMoreButton} title={'VIEW ALL'} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.eightContainer}>
        <Grid container>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Typography sx={style.caroVideoTitle}>FEATURED VIDEOS</Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Box>
              <VideoCarosuel />
              <WrapperButton
                sx={style.thoughtLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.nineContainer}>
        <Grid container>
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <Typography sx={style.caroTitle}>FEATURED BOOKS</Typography>
          </Grid>
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <Box sx={{ textAlign: 'center' }}>
              <BooksCarosuel />
              <WrapperButton sx={style.loadMoreButton} title={'VIEW ALL'} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.tenContainer}>
        <Grid container>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Typography sx={style.caroVideoTitle}>MAGAZINES</Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Box>
              <BooksCarosuel />
              <WrapperButton
                sx={style.thoughtLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.getQuranContainer}>
        <Box sx={style.leafBackStyle}>
          <img src={leafback} alt="check" />
        </Box>
        <Box sx={style.absoluteContainer}>
          <Typography sx={style.leafBackText}>
            GET YOUR OWN <br />
            QURAN RIGHT NOW!
          </Typography>
          <Box sx={style.leafButtonContainer}>
            <WrapperButton
              title={'Download Quran'}
              sx={style.leafBackButtonStyle}
            />
            <WrapperButton
              title={'Read Online'}
              sx={style.leafBackButtonStyle}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid container>
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <Typography sx={style.caroTitle}>QURAN DOWNLOAD</Typography>
          </Grid>
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <Box sx={{ textAlign: 'center' }}>
              <QuranCarousel />
              <WrapperButton sx={style.loadMoreButton} title={'VIEW ALL'} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
