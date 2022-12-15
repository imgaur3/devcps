import { fontFamily } from '../../common/utils/constants';
import { theme } from '../../Theme';
export const style = {
  navItemDrawer: {
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },
  appBarContainer: {
    display: 'flex',
    marginBottom: 5,
    '.MuiAppBar-root': {
      backgroundColor: theme.palette.primary.light,
      fontFamily: fontFamily,
      padding: 2,
    },
    '.MuiToolbar-root': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 0,
      marginTop: 0,
      paddingRight: 0,
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
  hamburgerIcon: {
    mr: 2,
    display: { sm: 'none' },
    padding: 1,
    '.MuiSvgIcon-root': {
      width: 40,
      height: 30,
      backgroundColor: theme.palette.grey[500],
    },
  },
  mobileLogoContainer: {
    textAlign: 'left',
    '@media (min-width: 600px)': {
      display: 'none',
    },
  },
  dropdownMenuItems: {
    '.MuiList-root MuiMenu-list': {
      backgroundColor: theme.palette.background.paper,
      marginTop: 2,
    },
    '.MuiMenuItem-root': {
      color: theme.palette.grey[900],
      fontFamily: 'open sans',
      fontSize: 13,
      ':hover': {
        color: theme.palette.common.black,
      },
    },
  },
};
