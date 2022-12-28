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
    textAlign: 'center',
  },
  caroTitle: {
    fontFamily: fontFamily,
    textAlign: 'center',
    fontSize: 50,
    color: theme.palette.text.secondary,
  },
  caroDesc: {
    color: theme.palette.grey[100],
    letterSpacing: 3,
    fontSize: 15,
  },
  loadMoreButton: {
    background: theme.palette.text.secondary,
    padding: '5px 25px 5px 25px',
    fontWeight: 'bold',
    marginTop: 3,
  },
  fourthSectionContainer: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.primary.main,
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
  sixSectionContainer: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.primary.main,
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
  thoughtsTitle: {
    color: theme.palette.text.primary,
    fontSize: 35,
  },
  thoughtLoadMoreButton: {
    background: theme.palette.text.primary,
    padding: '5px 25px 5px 25px',
    fontWeight: 'bold',
  },
  fifthSectionContainer: {
    width: '100%',
    background: theme.palette.background.paper,
    padding: '50px 100px 50px 100px',
    '@media screen and (max-width: 600px)': {
      padding: '10px 20px 10px 20px',
      textAlign: 'center',
    },
  },
  downloadQuranButton: {
    background: theme.palette.text.secondary,
    padding: '5px 25px 5px 25px',
    margin: 1,
  },
  readOnlineButton: {
    background: theme.palette.text.secondary,
    padding: '5px 25px 5px 25px',
    margin: 1,
  },
  sevenContainer: {
    background: theme.palette.background.paper,
    padding: 2,
  },
  eightContainer: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.primary.main,
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
  caroVideoTitle: {
    fontFamily: fontFamily,
    textAlign: 'center',
    fontSize: 50,
    color: theme.palette.text.primary,
  },
  nineContainer: {
    background: theme.palette.background.paper,
    padding: 2,
  },
  tenContainer: {
    background: theme.palette.primary.main,
    width: '100%',
    textAlign: 'center',
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
  getQuranContainer: {
    width: '100%',
    position: 'relative',
    textAlign: 'center',
  },
  leafBackStyle: {
    '& img': {
      width: '100%',
      height: '600px',
      objectFit: 'cover',
    },
  },
  leafBackButtonStyle: {
    backgroundColor: theme.palette.text.primary,
    padding: '10px 20px 10px 20px',
    margin: 1,
  },
  leafButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  leafBackText: {
    color: theme.palette.error.dark,
    fontFamily: 'open sans',
    fontSize: 60,
    letterSpacing: 0.5,
    fontWeight: 'bolder',
  },
  cpsLearningContainer: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.primary.main,
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
  learnCardContainer: {
    width: '100%',
    background: theme.palette.primary.main,
    padding: 2,
  },
  learnCardSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  initiativeContainer: {
    width: '100%',
    background: theme.palette.background.paper,
    padding: '50px 100px 50px 100px',
    '@media screen and (max-width: 600px)': {
      padding: '10px 20px 10px 20px',
    },
  },
  learnCardBox: {
    background: theme.palette.background.paper,
  },
  cardImageStyle: {
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  cardBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBoxDescription: {
    fontStyle: 'italic',
    color: theme.palette.grey[100],
  },
  subscribeFooterContainer: {
    width: '100%',
  },
  accrodianContainer: {
    paddingTop: 3,
    paddingBottom: 10,
    width: '100%',
    background: theme.palette.background.paper,
  },
  accordianLoadMoreButton: {
    background: theme.palette.text.primary,
    padding: '5px 25px 5px 25px',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  galleryContainer: {
    width: '100%',
    background: theme.palette.background.paper,
    textAlign: 'center',
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
  galleryHeading: {
    fontFamily: fontFamily,
    color: theme.palette.text.secondary,
    fontSize: 45,
    paddingBottom: 3,
  },
  galleryLoadMoreButton: {
    background: theme.palette.text.secondary,
    padding: '5px 25px 5px 25px',
    fontWeight: 'bold',
  },
  quotesContainer: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.primary.main,
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
};
