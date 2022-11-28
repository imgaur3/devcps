export const style = {
  textFieldBox: {
    position: 'relative',
    width: '100%',
    '& .MuiTextField-root': {
      marginBottom: '0px',
    },
  },
  textValInput: {
    marginBottom: 25,
    width: '100%',
    '& .MuiInput-underline:after': {
      borderBottom: '#FF8010',
    },
    '& .MuiInputLabel-root .Mui-focused': {
      color: 'green',
    },
    '.MuiOutlinedInput-input': {
      padding: '16.5px 14px',
    },
  },
  inputRoot: {
    width: '100%',
    fontSize: 16,
    color: '#404852',
    '&:hover': {
      '&:not(.Mui-disabled)::before': {
        borderBottomColor: '#FF8010',
      },
    },
  },
  labelRoot: {
    fontFamily: 'oswald',
    fontWeight: 400,
    fontSize: 15,
    letterSpacing: 0.35,
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'red',
      paddingBottom: 10,
    },
    '.MuiOutlinedInput-input': {
      padding: '16.5 14',
      background: 'red',
    },
  },
  labelFocused: {
    fontFamily: 'oswald',
    fontWeight: 400,
    fontSize: 15,
    transform: 'translate(0, 1.5px) scale(1)',
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#404852',
      paddingBottom: 10,
    },
    '& .MuiInputLabel-root .Mui-focused': {
      marginTop: 10,
    },
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    position: 'absolute',
    bottom: 4,
    left: 0,
  },
};
