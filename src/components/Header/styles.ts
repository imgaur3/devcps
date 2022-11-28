export const style = {
  boxContainer: {
    width: '100%',
    height: 'auto',
    '@media screen and (maxWidth: 600px)': {
      height: 200,
    },
  },
  headerText: {
    fontSize: '80px',
    fontFamily: 'Oswald',
    color: '#ffff',
    fontWeight: '500',
    flexDirection: 'row',
    paddingTop: '200px',
    paddingLeft: '100px',
    textTransform: 'uppercase',
    whiteSpace: 'pre-line',
    lineHeight: 1.1,
    '@media screen and (max-width: 600px)': {
      fontSize: '30px',
      paddingTop: '50px',
      paddingLeft: '30px',
    },
  },
  linearGradient: {
    background:
      'linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(0,212,255,0) 100%)',
    height: '600px',
    '@media screen and (max-width: 600px)': {
      height: '200px',
    },
  },
  headerHomeImage: {
    width: '100%',
    position: 'absolute',
    height: '600px',
    zIndex: '-1',
    objectFit: 'cover',
    '@media screen and (max-width: 600px)': {
      width: '100%',
      height: '200px',
    },
  },
};
