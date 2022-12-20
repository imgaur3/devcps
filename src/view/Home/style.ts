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
    textAlign: 'justify',
  },
  learnButton: {
    background: 'transparent',
    border: '1px solid #979797',
    color: theme.palette.grey[100],
    marginTop: 2,
    borderRadius: 2,
    fontWeight: 'bold',
  },
  centerImage: {
    margin: 'auto',
    textAlign: 'center',
  },
  thirdSectionContainer: {
    width: '100%',
    background: theme.palette.primary.main,
    padding: '50px 100px 50px 100px',
    '@media screen and (max-width: 600px)': {
      padding: '10px 20px 10px 20px',
    },
  },
  peaceButton: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    margin: 1,
  },
  initiativeButton: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    margin: 1,
  },
  imageResponsive: {
    '& img': {
      width: '100%',
    },
  },
  carouselContainer: {
    width: '100%',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caroTitle: {
    fontFamily: fontFamily,
    textAlign: 'center',
    fontSize: 50,
    color: theme.palette.text.secondary,
  },
  caroDesc: {
    color: theme.palette.grey[500],
    letterSpacing: 3,
  },
  loadMoreButton: {
    background: theme.palette.text.secondary,
    padding: '5px 25px 5px 25px',
    fontWeight: 'bold',
  },
};
