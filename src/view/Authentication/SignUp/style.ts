export const style = {
  signupContainer: {
    width: '100%',
    height: '100vh',
    background: '#FBF8FD',
    padding: 6,
  },
  logoTitle: {
    textAlign: 'left',
    color: '#2E5D9E',
    fontSize: 40,
    fontFamily: 'oswald',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  alrightTitle: {
    color: '#545454',
    fontFamily: 'open sans',
    display: 'inline',
    '@media screen and (max-width: 600px)': {
      margin: 2,
      textAlign: 'center',
    },
  },
  logInButton: {
    background: 'transparent',
    marginLeft: 2,
    color: '#2E5D9E',
    border: '1px solid #2E5D9E',
    '&: hover': {
      color: '#fff',
    },
  },
  signupImage: {
    '& img': {
      width: '100%',
      height: '580px',
      objectFit: 'contain',
      padding: 5,
      '@media screen and (max-width: 600px)': {
        display: 'none',
      },
    },
  },
  authContainer: {
    width: '100%',
  },
  welcomeText: {
    color: '#797979',
    fontFamily: 'open sans',
    fontWeight: 600,
    marginBottom: 1.5,
    fontSize: 22,
  },
  socialIcons: {
    '& img': {
      width: '30px',
      height: '30px',
      objectFit: 'contain',
      margin: '40px 30px 20px 0px',
    },
  },
  logInText: {
    color: '#797979',
    fontFamily: 'open sans',
    marginBottom: 3,
    fontSize: 15,
  },
  rightContainer: {
    textAlign: 'right',
    padding: 2,
    '@media screen and (max-width: 600px)': {
      textAlign: 'center',
    },
  },
};
