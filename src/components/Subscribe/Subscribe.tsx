import React from 'react';
import { Box, Button, Grid, InputAdornment, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import maulana from '../../assets/images/maulana.jpg';
import { style } from './styles';
interface State {
  amount: string;
}
const Subscribe = () => {
  const [values, setValues] = React.useState<State>({
    amount: '',
  });

  const handleChange =
    // eslint-disable-next-line no-undef
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <Box sx={style.subscribeContainer}>
      <Box sx={style.subscribeBackImage}>
        <img src={maulana} alt="bg-image" />
      </Box>
      <Box sx={style.subscribeSubContainer}>
        <Grid container>
          <Grid item lg={2} xs={1} sm={1} md={1}></Grid>
          <Grid item lg={8} xs={10} sm={10} md={10}>
            <Typography sx={style.subscribeText}>SUBSCRIBE</Typography>
            <Typography sx={style.subscribeParaText}>
              CPS shares spiritual wisdom to connect people to their Creator to
              learn the art of life management and rationally find answers to
              questions pertaining to life and its purpose. Subscribe to our
              newsletters.
            </Typography>
            <Box sx={style.formContainerDesign}>
              <FormControl
                fullWidth
                sx={{
                  m: 1,
                  '& .MuiFormControl-root': {
                    color: '#fff',
                  },
                  '& .MuiFormLabel-root': {
                    color: '#fff',
                  },
                  '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: '#ffffff',
                  },
                  '& .MuiInputLabel-outlined': {
                    color: '#fff',
                  },
                }}
              >
                <InputLabel
                  sx={{
                    '&.MuiInputLabel-root .Mui-focused': {
                      color: '#fff',
                    },
                    '.MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                      background: 'red',
                      color: 'red',
                    },
                  }}
                  htmlFor="outlined-adornment-amount"
                >
                  Your Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        variant={'contained'}
                        style={style.subscribeButton}
                      >
                        SUBSCRIBE
                      </Button>
                    </InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
            </Box>
            <Typography sx={style.leafText}>
              <i className="fa fa-leaf" style={{ color: '#A6E142' }}></i> &nbsp;
              Daily Dose of Wisdom
            </Typography>
          </Grid>
          <Grid item lg={2} xs={1} sm={1} md={1}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Subscribe;
