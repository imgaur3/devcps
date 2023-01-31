import { fontFamily } from 'common/utils/constants';
import { theme } from 'Theme';

export const style = {
  creationPlanContainer: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  discoverTextContainer: {
    width: '100%',
    background: theme.palette.background.paper,
    padding: '100px 150px 50px 150px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 30px 20px 30px',
    },
  },
  discoverParaContainer: {
    color: theme.palette.grey[500],
    textAlign: 'justify',
    lineHeight: 1.5,
    letterSpacing: 1,
  },
  filterArticleContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'start',
    justifyContent: 'space-around',
  },
  discoverCaroContainer: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.background.paper,
    padding: '70px 120px 70px 120px',
    '@media screen and (max-width: 600px)': {
      padding: '20px 40px 20px 40px',
    },
  },
  discoverFilterContainer: {
    textAlign: 'center',
    padding: 1.5,
  },
  thoughtLoadMoreButton: {
    background: theme.palette.text.secondary,
    padding: '5px 25px 5px 25px',
    fontWeight: 'bold',
  },
  caroVideoTitle: {
    fontFamily: fontFamily,
    textAlign: 'center',
    fontSize: 50,
    color: theme.palette.text.secondary,
  },
  subThemesContainer: {
    background: theme.palette.background.paper,
  },
  subThemesCardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
  },
  subThemesTitle: {
    fontFamily: fontFamily,
    textAlign: 'center',
    fontSize: 50,
    color: theme.palette.text.secondary,
  },
};
