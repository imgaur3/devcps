import { fontFamily } from 'common/utils/constants';
export const style = {
  headerContainer: {
    width: '100%',
  },
  headerOverlapImage: {
    '& img': {
      width: '100%',
      position: 'relative',
      objectFit: 'cover',
      height: '500px',
      '@media screen and (max-width: 600px)': {
        height: 200,
      },
    },
  },
  headerOverlapImageText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media screen and (maxWidth: 600px)': {
      height: 200,
      transform: 'translate(-50%, -50%)',
    },
  },
  headerMiddleText: {
    color: '#ffff00',
    fontFamily: fontFamily,
    fontSize: 80,
    '@media only screen and (maxWidth: 600px)': {
      height: 40,
      marginTop: -150,
    },
  },
};
