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
      padding: 2,
    },
  },

  absoText: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    color: theme.palette.background.paper,
    fontFamily: 'open sans',
    fontSize: 20,
    fontWeight: 200,
  },
};
