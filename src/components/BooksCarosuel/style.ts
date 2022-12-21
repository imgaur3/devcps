import { theme } from 'Theme';
export const style = {
  carouselContainer: {
    width: '100%',
    padding: 10,
    background: 'transparent',
  },
  cardBox: {
    padding: 2,
  },
  cardImage: {
    '& img': {
      width: '100%',
      objectFit: 'contain',
      borderRadius: 1,
    },
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
};
