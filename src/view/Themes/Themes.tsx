import React from 'react';
import { Box, Typography } from '@mui/material';

import { Header, Subscribe, WrapperButton } from 'components';
import {
  themeCard1,
  themeCard2,
  themeCard3,
  themeCard4,
  themeCard5,
  themeCard6,
  themeCard7,
  themeCard8,
  themeCard9,
  themeCard10,
  themeCard11,
  themeCard12,
  themeCard13,
  themeCard14,
  themeCard15,
  themeCard16,
  themeCard17,
  themeCard18,
  themeCard22,
  themeCard23,
  themeCard24,
  themes,
} from 'assets';

import { style } from './style';
import ThemeCard from './ThemeCard/ThemeCard';
const Themes = () => {
  return (
    <Box sx={style.themesContainer}>
      <Header image={themes} text={'THEMES'} />
      <Box sx={style.themeCardBoxContainer}>
        <Box>
          <Typography sx={style.discoverTitle}>DISCOVER GOD</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard
              images={themeCard1}
              title={'ABSOLUTE TRUST IN GOD'}
              description={'As studies have shown, all men and…'}
            />
          </Box>
          <Box>
            <ThemeCard images={themeCard2} title={'ATHEISM'} />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard3}
              title={'ABSOLUTE TRUST IN GOD'}
              description={'As studies have shown, all men and…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.spiritualCardBoxContainer}>
        <Box>
          <Typography sx={style.caroTitle}>SPIRITUALITY</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard
              images={themeCard4}
              title={'ACCEPTANCE OF CRITICISM'}
              description={'Acceptance of criticism is an important…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard5}
              title={'RE-ENGINEERING OF THE MIND'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard6}
              title={'CONTENTMENT'}
              description={'Chapter 102 of the Quran refers to a…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.callToBoxCardBoxContainer}>
        <Box>
          <Typography sx={style.discoverTitle}>CALL OF GOD</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard
              images={themeCard7}
              title={'AGE OF DAWAH OPPORTUNITIES'}
              description={'In the previous ages, we could do the…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard8}
              title={'DAWAH RESPONSIBILITY'}
              description={'Every believer must be eager to guide…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard9}
              title={'PRE-REQUISITES OF DAWAH'}
              description={'The Quran repeatedly mentions Christ…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.creationCardBoxContainer}>
        <Box>
          <Typography sx={style.caroTitle}>CREATION PLAN OF GOD</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard images={themeCard10} title={'AGE OF OPPORTUNITIES'} />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard11}
              title={'AGE OF PEACE'}
              description={'Scholars generally define peace as the…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard12}
              title={'BLASPHEMY AND ISLAM'}
              description={'It is generally held that Islam…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.lifeManagementCardBoxContainer}>
        <Box>
          <Typography sx={style.discoverTitle}>LIFE MANAGEMENT</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard images={themeCard13} title={'ACCEPTANCE OF REALITY'} />
          </Box>
          <Box>
            <ThemeCard images={themeCard14} title={'ADJUSTMENT'} />
          </Box>
          <Box>
            <ThemeCard images={themeCard15} title={'ANGER MANAGEMENT'} />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.politicalCardBoxContainer}>
        <Box>
          <Typography sx={style.caroTitle}>
            POLITICAL INTERPRETATION OF ISLAM
          </Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard
              images={themeCard10}
              title={'ARGUMENTS AGAINST SUICIDE BOMBING AND TERRORISM'}
              description={'The root cause of suicide bombing is…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard11}
              title={'COUNTERING POLITICAL INTERPRETATION OF ISLAM'}
              description={'Modern-day terrorism in the name of…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard12}
              title={'DARUL KUFR I DARUL HARB I DARUL ISLAM'}
              description={'The terms Darul Islam, Darul Harb and…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.lifeManagementCardBoxContainer}>
        <Box>
          <Typography sx={style.discoverTitle}>PROPHETIC WISDOM</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard
              images={themeCard16}
              title={'CONTEMPORARY RELEVANCE OF THE PROPHETS WISDOM'}
              description={'One of the qualities of the Prophet of…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard17}
              title={'HUDAYBBIYAH MODEL'}
              description={'The Hudaybiyyah method entailed the…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard18}
              title={'PROPHET MUHAMMAD: MERCY FOR MANKIND'}
              description={'The Quran says of the Prophet of Islam…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.quranCardBoxContainer}>
        <Box>
          <Typography sx={style.caroTitle}>QURAN</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard images={themeCard10} title={'AGE OF OPPORTUNITIES'} />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard11}
              title={'AGE OF PEACE'}
              description={'Scholars generally define peace as the…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard12}
              title={'BLASPHEMY AND ISLAM'}
              description={'It is generally held that Islam…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.peaceCardBoxContainer}>
        <Box>
          <Typography sx={style.discoverTitle}>PEACE</Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard
              images={themeCard22}
              title={'CONFLICT RESOLUTION'}
              description={'We are so closely interdependent…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard23}
              title={'IDEOLOGY OF PEACE'}
              description={'The modern age has witnessed violence…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard24}
              title={'INTERFAITH DIALOGUE'}
              description={'In a globalised world comprising multi-…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.islamCardBoxContainer}>
        <Box>
          <Typography sx={style.caroTitle}>
            ISLAM IN THE 21ST CENTURY
          </Typography>
          <Typography sx={style.caroDesc}>
            THE AIM OF CREATION IS TO SELECT INDIVIDUALS FIT TO INHABIT ETERNAL
            PARADISE
          </Typography>
        </Box>
        <Box sx={style.discoverCardContainer}>
          <Box>
            <ThemeCard images={themeCard10} title={'AGE OF OPPORTUNITIES'} />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard11}
              title={'AGE OF PEACE'}
              description={'Scholars generally define peace as the…'}
            />
          </Box>
          <Box>
            <ThemeCard
              images={themeCard12}
              title={'BLASPHEMY AND ISLAM'}
              description={'It is generally held that Islam…'}
            />
          </Box>
        </Box>
        <Box sx={style.loadMoreButton}>
          <WrapperButton sx={style.LoadMoreButton} title={'LOAD MORE'} />
        </Box>
      </Box>
      <Box sx={style.subscribeFooterContainer}>
        <Subscribe />
      </Box>
    </Box>
  );
};

export default Themes;
