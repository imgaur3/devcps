import { fontFamily } from '../../common/utils/constants';
import { theme } from '../../Theme';
export const style = {
  navItemDrawer: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  appBarContainer: {
    display: 'flex',
    '.MuiAppBar-root': {
      backgroundColor: theme.palette.primary.light,
      fontFamily: fontFamily,
      padding: 2,
    },
  },
  menuItems: {
    color: theme.palette.text.primary,
    fontFamily: fontFamily,
    ' :hover': {
      color: theme.palette.text.secondary,
      backgroundColor: 'transparent',
    },
  },
  menuDonateButton: {
    backgroundColor: theme.palette.text.secondary,
    padding: '5px 15px 5px 15px',
    borderRadius: 2,
  },
  searchIconStyle: {
    color: theme.palette.grey[500],
  },
};
