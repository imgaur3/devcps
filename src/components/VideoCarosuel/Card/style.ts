import { theme } from 'Theme';
export const style = {
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
  cardButton: {
    background: 'transparent',
    textTransform: 'uppercase',
    color: '#545454',
    fontSize: 10,
    letterSpacing: 1,
    border: '1px solid #545454',
    '&:hover': {
      background: '#545454',
      color: '#fff',
    },
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
};
