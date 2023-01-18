import { theme } from 'Theme';

export const style = {
  subCardContainer: {
    width: 340,
    height: 250,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subThemesBoxImage: {
    '& img': {
      height: 250,
      width: 340,
      objectFit: 'cover',
      padding: 1,
    },
  },

  absoText: {
    position: 'absolute',
    top: 100,
    left: 50,
    color: theme.palette.background.paper,
    fontFamily: 'open sans',
    fontSize: 20,
    fontWeight: 'bold',
  },
};
