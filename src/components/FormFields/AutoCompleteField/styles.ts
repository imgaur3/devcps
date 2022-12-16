export const style = {
  textValInput: {
    width: '100%',
    '.MuiInput-underline:after': {
      borderBottom: '#5F7C8C',
    },
    '.MuiInputLabel-root .Mui-focused': {
      color: 'green',
    },
  },
  inputRoot: {
    width: '100%',
    fontSize: 16,
    color: '#404852',
    '&:hover': {
      '&:not(.Mui-disabled)::before': {
        borderBottomColor: '#5F7C8C',
      },
    },
  },
  labelRoot: {
    fontFamily: 'red',
    fontWeight: 400,
    fontSize: 15,
    letterSpacing: 0.35,
    '.MuiFormLabel-root.Mui-focused': {
      color: 'red',
      paddingBottom: 10,
    },
  },
  labelFocused: {
    fontFamily: 'red',
    fontWeight: 400,
    fontSize: 15,
    transform: 'translate(0, 1.5px) scale(1)',
    '.MuiFormLabel-root.Mui-focused': {
      color: '#404852',
      paddingBottom: 10,
    },
    '.MuiInputLabel-root .Mui-focused': {
      marginTop: 10,
    },
  },
};
