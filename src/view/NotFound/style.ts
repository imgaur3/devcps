import { fontFamily } from 'common/utils/constants';
import { theme } from 'Theme';
export const style = {
  notFoundContainer: {
    height: '100vh',
    width: '100vw',
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundTitle: {
    color: theme.palette.text.primary,
    fontSize: 80,
    fontFamily: fontFamily,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  backToSignUp: {
    cursor: 'pointer',
    fontFamily: 'open sans',
    fontSize: 30,
    color: theme.palette.grey[500],
  },
};
