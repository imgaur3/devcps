import React from 'react';
import {
  Box,
  Grid,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { facebook, twitter, instagram, linkedin, youtube, quora } from 'assets';
import { WrapperButton } from 'components';

import { style } from './style';

const aboutUsItems = [
  {
    name: 'Home',
    path: '/home',
    key: 'home',
  },
  {
    name: 'About Us',
    path: '/about-us',
    key: 'about-us',
  },
  {
    name: 'Download Quran',
    path: '/download-quran',
    key: 'download-quran',
  },
  {
    name: 'Get Involved',
    path: '/get-involved',
    key: 'get-involved',
  },
  {
    name: 'Order Free Quran',
    path: '/order-free-quran',
    key: 'order-free-quran',
  },
  {
    name: 'Thoughts Of Maulana',
    path: '/thoughts-of-maulana',
    key: 'thoughts-of-maulana',
  },
];

const mediaItems = [
  {
    name: 'Articles',
    path: '/articles',
    key: 'articles',
  },
  {
    name: 'Audio',
    path: '/audio',
    key: 'audio',
  },
  {
    name: 'Gallery',
    path: '/gallery',
    key: 'gallery',
  },
  {
    name: 'Magazines',
    path: '/magazines',
    key: 'magazines',
  },
  {
    name: 'News Room',
    path: '/news-room',
    key: 'news-room',
  },
  {
    name: 'Videos',
    path: '/videos',
    key: 'videos',
  },
];

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <Box sx={style.footerContainer}>
      <Box sx={style.sectionContainer}>
        <Grid container spacing={2}>
          <Grid item lg={2} sm={0} md={0} xs={0}></Grid>
          <Grid item lg={3} sm={12} md={12} xs={12}>
            <Box sx={style.listStyle}>
              <Typography sx={style.sectionHeading}>ABOUT US</Typography>
              <Stack direction="column">
                <MenuList>
                  {aboutUsItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      sx={style.verticalItemList}
                      onClick={() => {
                        Navigate('/item.path');
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={3} sm={12} md={12} xs={12}>
            <Box>
              <Typography sx={style.sectionHeading}>MEDIA</Typography>
              <Box sx={style.listStyle}>
                <Stack direction="column">
                  <MenuList>
                    {mediaItems.map((item) => (
                      <MenuItem
                        key={item.name}
                        sx={style.verticalItemList}
                        onClick={() => {
                          Navigate('/item.path');
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} sm={12} md={12} xs={12}>
            <Box>
              <Typography sx={style.sectionHeading}>FOLLOW US</Typography>
              <Box sx={style.iconsImageContainer}>
                <img src={facebook} alt={'facebook-logo'} />
                <img src={twitter} alt={'twitter-logo'} />
                <img src={instagram} alt={'instagram-logo'} />
                <img src={linkedin} alt={'linkedin-logo'} />
                <img src={youtube} alt={'youtube-logo'} />
                <img src={quora} alt={'quora-logo'} />
              </Box>
              <WrapperButton
                title={'DONATE NOW'}
                size="large"
                sx={style.donateFooterButton}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid item lg={1} sm={0} md={0} xs={0}></Grid>
      </Box>
      <Grid container>
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <hr style={style.horizontalLine} />
          <Typography sx={style.copyrightText}>
            2022-2023 Powered by Openlogic Systems
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
