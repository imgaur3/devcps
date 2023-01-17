import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import {
  ArticleCarosuel,
  SliderHeader,
  WrapperButton,
  VideoCarosuel,
  BooksCarosuel,
  QuranCarousel,
  CarouselSlider,
  Subscribe,
  GalleryCarousel,
  QuotesCarosuel,
  WisdomCarosuel,
  FeaturedCarosuel,
} from 'components';
import { initiative, sec2, sec3, leafback, peace, involved } from 'assets';

import { style } from './style';
import HomeAccordian from './HomeAccordian';
const Home = () => {
  return (
    <Box sx={style.homeContainer}>
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
            <Box>
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
        <Box>
          <WisdomCarosuel />
        </Box>
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
            <WisdomCarosuel />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Box>
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
            <WisdomCarosuel />
            <Box>
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
            <Box sx={{ textAlign: 'center' }}>
              <FeaturedCarosuel />
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
      <Box sx={style.cpsLearningContainer}>
        <Box>
          <Typography sx={style.caroVideoTitle}>CPS E-LEARNING</Typography>
          <Typography sx={style.caroDesc}>
            TOWARDS GOD - REALIZATION AND DUTY - CONSCIOUSNESS
          </Typography>
        </Box>
        <Box sx={style.learnCardContainer}>
          <Box sx={style.learnCardSubContainer}>
            <CarouselSlider />
            <Box sx={{ marginTop: 5 }}>
              <WrapperButton
                sx={style.thoughtLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={style.initiativeContainer}>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Typography sx={style.sectionHeading}>
                CPS QURAN FOR ALL INITIATIVE
              </Typography>
              <Typography sx={style.sectionMoreDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                neque non libero pellentesque aliquet. Nulla facilisi. Morbi
                molestie odio maximus congue laoreet. Donec tellus magna,
                posuere sit amet felis ac, maximus facilisis urna. Ut convallis
                tellus non diam porttitor pretium et eu enim. Ut finibus auctor
                urna,
              </Typography>
              <WrapperButton
                title={'LEARN MORE'}
                sx={style.downloadQuranButton}
              />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box sx={style.imageResponsive}>
                <img src={peace} alt="peace-image" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.quotesContainer}>
        <Box>
          <Typography sx={style.caroVideoTitle}>QUOTES BY MAULANA</Typography>
        </Box>
        <Box sx={style.learnCardContainer}>
          <Box sx={style.learnCardSubContainer}>
            <QuotesCarosuel />
            <Box sx={{ marginTop: 5 }}>
              <WrapperButton
                sx={style.thoughtLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={style.initiativeContainer}>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Box sx={style.imageResponsive}>
                <img src={involved} alt="involved" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <Box sx={{ padding: 3 }}>
              <Typography sx={style.sectionHeading}>GET INVOLVED</Typography>
              <Typography sx={style.sectionMoreDescription}>
                CPS Peace and Quran for All Initiatives are taking the message
                of the Quran and Islamic literature to the world. This is a
                herculean task. We invite you to Get Involved{' '}
                <span style={{ fontWeight: 'bold' }}>info@cpsglobal.org</span>
              </Typography>
              <WrapperButton
                title={'LEARN MORE'}
                sx={style.downloadQuranButton}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={style.cpsLearningContainer}>
        <Box>
          <Typography sx={style.caroVideoTitle}>AMBASSADOR OF PEACE</Typography>
        </Box>
        <Box sx={style.learnCardContainer}>
          <Box sx={style.learnCardSubContainer}>
            <ArticleCarosuel />
            <Box sx={{ marginTop: 5 }}>
              <WrapperButton
                sx={style.thoughtLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={style.galleryContainer}>
        <Typography sx={style.galleryHeading}>GALLERY</Typography>
        <Box>
          <GalleryCarousel />
        </Box>
        <Box sx={{ marginTop: 5 }}>
          <WrapperButton sx={style.galleryLoadMoreButton} title={'VIEW ALL'} />
        </Box>
      </Box>
      <Box style={style.accrodianContainer}>
        <Box sx={{ paddingBottom: 5 }}>
          <Typography sx={style.caroVideoTitle}>FAQS</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item lg={2} md={1} sm={1} xs={1}></Grid>
          <Grid item lg={8} md={10} sm={10} xs={10}>
            <HomeAccordian />
            <Box sx={{ marginTop: 5, textAlign: 'center' }}>
              <WrapperButton
                sx={style.accordianLoadMoreButton}
                title={'VIEW ALL'}
              />
            </Box>
          </Grid>
          <Grid item lg={2} md={1} sm={1} xs={1}></Grid>
        </Grid>
      </Box>
      <Box sx={style.subscribeFooterContainer}>
        <Subscribe />
      </Box>
    </Box>
  );
};

export default Home;
