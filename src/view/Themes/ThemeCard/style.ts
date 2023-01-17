import { theme } from 'Theme';

export const style = {
  cardThemeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  cardBox: {
    width: 350,
    height: 350,
    border: '1px solid #D9D9D9',
    borderRadius: 1,
    margin: 1,
    background: theme.palette.background.paper,
  },
  cardBoxImage: {
    '& img': {
      width: 348,
      objectFit: 'contain',
    },
  },
  cardBoxTitle: {
    fontFamily: 'open sans',
    color: theme.palette.grey[500],
    fontWeight: 800,
  },
  cardBoxContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  cardBoxDescription: {
    color: theme.palette.grey[100],
  },
};
