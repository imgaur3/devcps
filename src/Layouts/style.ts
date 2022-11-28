export const style = {
  layout: {
    display: 'flex',
    '@media (max-width: 1024px)': {
      display: 'grid',
    },
  },
  main: {
    backgroundColor: 'aliceblue',
    width: '100%',
  },
  container: {
    paddingLeft: '4%',
    paddingBottom: '4%',
    marginRight: '2%',
    backgroundColor: 'white',
    marginTop: '1%',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '30px',
    '@media (max-width: 1024px)': {
      marginLeft: '10%',
    },
    '@media (max-width: 900px)': {
      marginLeft: '8%',
    },
  },
};
