export const style = {
  subscribeContainer: {
    width: '100%',
    height: '500px',
    opacity: 0.9,
    position: 'relative',
  },
  subscribeSubContainer: {
    top: 0,
    boxShadow: 'inset 0 0 0 2000px rgba(195, 159, 106, 0.9)',
    color: '#fff',
    position: 'absolute',
    width: '100%',
    height: '500px',
    fontSize: '20px',
    paddingTop: '100px',
    '@media screen and (max-width: 600px)': {
      paddingTop: '50px',
    },
  },
  subscribeBackImage: {
    '& img': {
      width: '100%',
      height: '500px',
      position: 'relative',
      objectFit: 'cover',
      '@media (max-width: 600px)': {
        height: '500px',
      },
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
    letterSpacing: 2,
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
