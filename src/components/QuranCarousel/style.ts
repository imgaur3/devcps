import { theme } from 'Theme';
export const style = {
  carouselContainer: {
    width: '100%',
    padding: 10,
  },
  cardBox: {
    padding: 2,
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
  booksContainer: {
    margin: '20px 30px 20px 30px',
  },
  booksChildContainer: {
    margin: '10px 20px 30px 20px',
  },
};
