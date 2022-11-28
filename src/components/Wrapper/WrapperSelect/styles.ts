export const style = {
  selectValInput: {
    marginBottom: 25,
    width: '100%',
    marginTop: 0,
    '@media (max-width: 1120px)': {
      marginTop: 0,
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  errorText: {
    color: '#7777',
    fontSize: 13,
    position: 'absolute',
    bottom: 4,
    left: 0,
  },
  placeHolder: {
    color: 'red',
    fontSize: '1rem',
    fontWeight: 400,
    textTransform: 'none',
    fontStyle: 'normal',
  },
};
