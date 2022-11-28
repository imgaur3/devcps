export const style = {
  textFieldBox: {
    position: 'relative',
    width: '100%',
  },
  textValInput: {
    width: '100%',
    '.MuiOutlinedInput-input': {
      padding: '16.5px 14px',
    },
  },
  inputRoot: {
    width: '100%',
    fontSize: 16,
    color: '#404852',
  },
  labelRoot: {
    fontFamily: 'open sans',
    fontWeight: 400,
    fontSize: 15,
    letterSpacing: 0.35,
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'red',
      paddingBottom: 10,
    },
  },
  labelFocused: {
    fontFamily: 'open sans',
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
};
