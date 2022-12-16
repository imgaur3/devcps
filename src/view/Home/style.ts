import { fontFamily } from 'common/utils/constants';
import { theme } from 'Theme';

export const style = {
  homeContainer: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  sliderContainer: {
    width: '100%',
  },
  secondSectionContainer: {
    width: '100%',
    background: theme.palette.background.paper,
    padding: '50px 100px 50px 100px',
    '@media screen and (max-width: 600px)': {
      padding: '10px 20px 10px 20px',
    },
  },
  videoContainer: {
    '& iframe': {
      width: '100%',
      height: 350,
    },
  },
  sectionHeading: {
    fontFamily: fontFamily,
    color: theme.palette.text.secondary,
    fontSize: 35,
    paddingBottom: 1,
  },
  sectionDescription: {
    color: theme.palette.text.secondary,
    fontFamily: 'open sans',
    letterSpacing: 3,
    fontSize: 15,
    paddingBottom: 1,
  },
  sectionMoreDescription: {
    color: theme.palette.grey[300],
    fontFamily: 'open sans',
    lineHeight: 2,
    fontSize: 17,
    paddingBottom: 1,
  },
  learnButton: {
    background: 'transparent',
    border: '1px solid #979797',
    color: theme.palette.grey[100],
    marginTop: 2,
    borderRadius: 2,
    fontWeight: 'bold',
  },
};
