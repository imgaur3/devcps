import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import {
  Header,
  VideoCarosuel,
  WrappedInput,
  WrappedSelect,
  WrapperButton,
} from 'components';
import {
  creationPlan,
  subTheme1,
  subTheme2,
  subTheme3,
  subTheme4,
  subTheme5,
  subTheme6,
} from 'assets';

import { style } from './style';
import SubThemes from '../SubThemes/SubThemes';
const languageItems = [
  { value: 'Articles', label: 'Articles' },
  { value: 'Audio', label: 'Audio' },
  { value: 'Books', label: 'Books' },
  { value: 'Videos', label: 'Videos' },
  { value: 'Type', label: 'Type' },
];

const typeValues = [
  { value: 'Hindi', label: 'Hindi' },
  { value: 'English', label: 'English' },
  { value: 'Urdu', label: 'Urdu' },
  { value: 'Arabic', label: 'Arabic' },
];
const CreationPlan = () => {
  const { control } = useForm({
    mode: 'onChange',
  });
  return (
    <Box sx={style.creationPlanContainer}>
      <Box>
        <Header image={creationPlan} text={'CREATION PLAN OF GOD'} />
      </Box>
      <Box sx={style.discoverTextContainer}>
        <Typography sx={style.discoverParaContainer}>
          The Quran tells us that man was created so that he might worship God.
          In the words of the Quran, “I created the Jinn and mankind only so
          that they might worship Me.” (51:56). In this verse, the worship of
          God means the realisation of God. Discovery of the realisation of God
          is, without doubt, the highest destination of anyone’s intellectual
          progress. The noblest is he who can attain this level of realisation.
          There are three kinds of such realisation. The experience of
          realisation of the first and second kinds has become a reality in
          history. So far as the realisation of the third kind is concerned, the
          prospect of it becoming a reality has become achievable only in the
          20th century for the first time in history.
        </Typography>
        <br />
        <Typography sx={style.discoverParaContainer}>
          The prophets achieved the experience of the first kind of discovery.
          This experience happened at the level of what is seen (ruyat). It is
          described in the Quran in this verse: “We showed Abraham our Kingdom
          of the heavens and the earth so that he might have certainty of
          faith.” (6:75). The words regarding the Prophet of Islam are similar.
          “And certainly he saw him descend a second time.” (53:13). This kind
          of realisation is attainable at the level of the seen. This
          realisation is reserved solely for the prophets.
        </Typography>
        <br />
        <Typography sx={style.discoverParaContainer}>
          The second level of realisation is at the discovery of one’s
          helplessness. Man discovers his total helplessness as compared to the
          all-powerfulness of Almighty God. In this way, he achieves the
          realisation of God. It has been aptly described in these words
          attributed to the fourth caliph Ali: “I discovered my Lord by the
          shattering of my ambitions.”
        </Typography>
        <br />
        <Typography sx={style.discoverParaContainer}>
          The third kind of realisation is at the voluntary or optional level. A
          man possessing total power discovers the Majesty of God and
          voluntarily surrenders himself before Him. This is no doubt the most
          challenging thing to do. When the philosophers and the theologians
          engaged in such discussions as ‘when God is almighty then man’s
          position is only of total helplessness,’ they concluded that the
          concept of man having power is only imaginary.
        </Typography>
      </Box>
      <Box sx={style.filterArticleContainer}>
        <Grid container spacing={2}>
          <Grid item lg={1} sm={1} xs={1} md={1}></Grid>
          <Grid item lg={2} sm={10} md={10} xs={10}>
            <Box sx={style.discoverFilterContainer}>
              <i
                className="fa fa-filter"
                aria-hidden="true"
                style={{ color: '#A6A6A6' }}
              ></i>{' '}
              FILTERS:
            </Box>
          </Grid>
          <Grid item lg={2} sm={10} md={10} xs={10}>
            <WrappedInput
              name={'Text'}
              control={control}
              placeholder={'Title'}
            />
          </Grid>
          <Grid item lg={2} sm={10} md={10} xs={10}>
            <WrappedSelect title={'Type'} data={typeValues} />
          </Grid>
          <Grid item lg={2}>
            <WrappedSelect title={'Languages'} data={languageItems} />
          </Grid>
          <Grid item lg={1} sm={1} xs={1} md={1}></Grid>
        </Grid>
      </Box>
      <Box sx={style.discoverCaroContainer}>
        <Grid container>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Typography sx={style.caroVideoTitle}>FEATURED ARTICLES</Typography>
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
      <Box style={style.subThemesContainer}>
        <Box>
          <Typography sx={style.subThemesTitle}>SUB THEMES</Typography>
        </Box>
        <Box sx={style.subThemesCardsContainer}>
          <Box>
            <SubThemes img={subTheme1} title={'ABSOLUTE TRUST IN GOD'} />
          </Box>
          <Box>
            <SubThemes img={subTheme2} title={'ATHISM'} />
          </Box>
          <Box>
            <SubThemes img={subTheme3} title={'CREATOR AND CREATION'} />
          </Box>
        </Box>
        <Box sx={style.subThemesCardsContainer}>
          <Box>
            <SubThemes img={subTheme4} title={'DISCOVER GOD'} />
          </Box>
          <Box>
            <SubThemes
              img={subTheme5}
              title={'ALL POWERFULNESS OF GOD, HELPLESSNESS OF MAN'}
            />
          </Box>
          <Box>
            <SubThemes img={subTheme6} title={'DIVINE SIGNS IN NATURE'} />
          </Box>
        </Box>
        <Box sx={style.subThemesCardsContainer}>
          <Box>
            <SubThemes
              img={subTheme1}
              title={'WHERE THERE IS DESIGN, THERE IS A DESIGNER'}
            />
          </Box>
          <Box>
            <SubThemes img={subTheme2} title={'DUA: A CALL TO GOD'} />
          </Box>
          <Box>
            <SubThemes img={subTheme3} title={'MAN DOES NOT STAND ALONE'} />
          </Box>
        </Box>
        <Box sx={style.subThemesCardsContainer}>
          <Box>
            <SubThemes img={subTheme1} title={'MONOTHEISM: TAWHEED'} />
          </Box>
          <Box>
            <SubThemes
              img={subTheme2}
              title={'RELATIONSHIP BETWEEN GOD AND MAN'}
            />
          </Box>
          <Box>
            <SubThemes img={subTheme3} title={'SUBMISSION TO GOD'} />
          </Box>
        </Box>
        <Box sx={style.subThemesCardsContainer}>
          <Box>
            <SubThemes
              img={subTheme1}
              title={'TAQWA: GOD-CONSCIOUSNESS OR FEAR OF GOD'}
            />
          </Box>
          <Box>
            <SubThemes img={subTheme2} title={'GOD: THE MOST MERCIFUL'} />
          </Box>
          <Box>
            <SubThemes img={subTheme3} title={'ZIKR: REMEMBERENCE OF GOD'} />
          </Box>
        </Box>
        <Box sx={style.subThemesCardsContainer}>
          <Box>
            <SubThemes img={subTheme1} title={'LOVE OF GOD'} />
          </Box>
          <Box>
            <SubThemes img={subTheme2} title={'CREATION PLAN OF GOD'} />
          </Box>
          <Box>
            <SubThemes img={subTheme3} title={'Maarifah: Realisation of God'} />
          </Box>
        </Box>
        <Box sx={style.subThemesCardsContainer}>
          <Box>
            <SubThemes
              img={subTheme1}
              title={'Interpretation of Human History'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreationPlan;
