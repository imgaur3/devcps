import { theme } from 'Theme';
export const style = {
  carouselContainer: {
    width: '100%',
  },
  cardBox: {
    position: 'relative',
  },
  cardImage: {
    '& img': {
      width: '100%',
      objectFit: 'contain',
      borderRadius: 1,
    },
  },
  cardContent: {
    position: 'absolute',
    color: theme.palette.background.paper,
    top: '70%',
    textAlign: 'center',
  },
  cardButton: {
    color: theme.palette.background.paper,
    fontSize: 20,
    top: '70%',
    background: 'transparent',
    ': hover': {
      background: 'transparent',
      textDecoration: 'underline',
    },
  },
  cardText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 20,
    fontFamily: 'open sans',
  },
  learnCardBox: {
    background: theme.palette.background.paper,
    height: '380px',
    margin: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImageStyle: {
    '& img': {
      width: '100px',
      height: '100px',
      borderRadius: '100%',
    },
  },
  cardBoxTitle: {
    fontSize: 18,
    fontFamily: 'open sans',
    letterSpacing: 0.1,
    color: theme.palette.grey[100],
  },
  cardBoxDescription: {
    marginTop: 3,
    fontWeight: 'bolder',
    color: theme.palette.grey[500],
  },
};
