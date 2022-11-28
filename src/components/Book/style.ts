export const style = {
  cardTitle: {
    color: '#C39F6A',
    textTransform: 'uppercase',
    fontFamily: 'open sans',
    fontWeight: 900,
    fontSize: 20,
  },
  cardDesc: {
    fontFamily: 'open sans',
    paddingBottom: 1,
  },
  cardButton: {
    background: 'transparent',
    textTransform: 'uppercase',
    color: '#545454',
    '&:hover': {
      background: '#545454',
      color: '#fff',
    },
  },
  cardBoxStyles: {
    border: '1px solid #D9D9D9',
    display: 'inline-block',
    margin: '0 10px',
    width: '290px',
    borderRadius: 1,
    background: '#fff',
    userSelect: 'none',
    '@media screen and (max-width: 600px)': {
      width: '330px',
      margin: '0 10px',
    },
  },
};
