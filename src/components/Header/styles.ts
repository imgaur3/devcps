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
      height: '600px',
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
    '@media screen and (max-width: 600px)': {
      top: '32%',
    },
  },
  headerMiddleText: {
    color: '#ffff00',
    fontFamily: fontFamily,
    fontSize: 80,
    '@media screen and (maxWidth: 600px)': {
      color: 'red',
    },
  },
};
