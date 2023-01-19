import { theme } from 'Theme';
export const style = {
  discoverParentContainer: {
    width: 346,
    height: 600,
  },
  caroImageBooks: {
    '& img': {
      width: 300,
      height: 500,
      objectFit: 'cover',
    },
    textAlign: 'center',
  },
  caroButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsStyle: {
    margin: 1,
    background: 'none',
    border: '1px solid #777',
    color: theme.palette.grey[500],
    '& hover': {
      background: theme.palette.grey[500],
      color: theme.palette.background.paper,
    },
  },
};
