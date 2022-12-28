import { theme } from 'Theme';

export const style = {
  carouselContainer: {
    width: '100%',
  },
  learnCardBox: {
    border: '1px solid #D9D9D9',
    width: 300,
    height: 400,
  },
  cardLanguage: {
    textAlign: 'right',
    fontSize: 13,
    fontFamily: 'oswald',
    textTransform: 'uppercase',
    color: '#545454',
  },
  descStyles: {
    color: '#3b3b3b',
    fontFamily: 'open sans',
    letterSpacing: 1,
  },
  dateStyles: {
    color: '#545454',
    letterSpacing: 2,
    textAlign: 'center',
    fontSize: 10,
    paddingBottom: 2,
    paddingTop: 1,
  },
  cardTitle: {
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
    fontFamily: 'open sans',
    fontWeight: 900,
    fontSize: 16,
  },
  cardDesc: {
    fontFamily: 'open sans',
  },
};
