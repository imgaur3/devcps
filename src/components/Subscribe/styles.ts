import { theme } from 'Theme';
export const style = {
  subscribeContainer: {
    width: '100%',
  },
  subscribeSubContainer: {
    top: 0,
    background: theme.palette.text.secondary,
    color: '#fff',
    width: '100%',
    fontSize: '20px',
    paddingTop: '100px',
    paddingBottom: 10,
    '@media screen and (max-width: 600px)': {
      paddingTop: '50px',
    },
  },
  leafText: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'open sans',
    letterSpacing: 1,
  },
  subscribeText: {
    fontSize: '45px',
    fontFamily: 'oswald',
  },
  subscribeParaText: {
    fontSize: 18,
    paddingBottom: 3,
    fontFamily: 'Open Sans',
    textAlign: 'justify',
  },
  subscribeButton: {
    background: '#ffffff',
    padding: '14px 20px 14px 20px',
    borderRadius: '5px',
    marginRight: -13,
    color: '#2E5D9E',
    fontSize: 16,
    fontWeight: 600,
  },
  formContainerDesign: {
    borderRadius: 15,
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
    },
  },
};
