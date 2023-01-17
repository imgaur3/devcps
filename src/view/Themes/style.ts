import { fontFamily } from 'common/utils/constants';
import { theme } from 'Theme';
export const style = {
  themesContainer: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  discoverCardContainer: {
    width: '100%',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  themeCardBoxContainer: {
    width: '100%',
  },
  discoverGodContainer: {
    textAlign: 'center',
  },
  caroTitle: {
    fontFamily: fontFamily,
    textAlign: 'center',
    fontSize: 50,
    color: theme.palette.text.primary,
    paddingTop: 5,
  },
  discoverTitle: {
    fontFamily: fontFamily,
    textAlign: 'center',
    fontSize: 50,
    color: theme.palette.text.secondary,
    paddingTop: 5,
  },
  caroDesc: {
    color: theme.palette.grey[100],
    letterSpacing: 3,
    fontSize: 15,
    textAlign: 'center',
  },
  LoadMoreButton: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    padding: '5px 25px 5px 25px',
    fontWeight: 'bold',
    border: '1px solid #2E5D9E',
  },
  loadMoreButton: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 3,
  },
  spiritualCardBoxContainer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  callToBoxCardBoxContainer: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  creationCardBoxContainer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  lifeManagementCardBoxContainer: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  politicalCardBoxContainer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  quranCardBoxContainer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  peaceCardBoxContainer: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  islamCardBoxContainer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  subscribeFooterContainer: {
    width: '100%',
  },
};
