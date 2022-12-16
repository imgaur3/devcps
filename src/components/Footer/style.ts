import { fontFamily } from 'common/utils/constants';

import { theme } from './../../Theme';
export const style = {
  footerContainer: {
    width: '100%',
    padding: '10px 5px 30px 5px',
    background: theme.palette.background.default,
  },
  sectionHeading: {
    color: theme.palette.background.paper,
    fontFamily: fontFamily,
    fontSize: 25,
  },
  sectionContainer: {
    padding: 10,
    '@media screen and (max-width: 600px)': {
      padding: 2,
    },
  },
  listStyle: {
    color: theme.palette.background.paper,
  },
  verticalItemList: {
    color: theme.palette.background.paper,
    fontSize: 20,
    opacity: 0.9,
  },
  iconsImageContainer: {
    '& img': {
      width: '35px',
      height: '35px',
      objectFit: 'contain',
      paddingLeft: 1,
      bottom: 0,
      paddingTop: 2,
    },
  },
  donateFooterButton: {
    background: theme.palette.text.secondary,
    color: theme.palette.background.paper,
    padding: '10px 20px 10px 20px',
    marginTop: 3,
    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },
  copyrightText: {
    color: theme.palette.background.paper,
    textAlign: 'center',
    padding: 5,
    fontFamily: 'open sans',
    fontSize: 20,
  },
  horizontalLine: {
    borderColor: theme.palette.grey[500],
    borderWidth: 1,
    opacity: 0.5,
  },
};
