import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';

import WrapperButton from '../../../components/Wrapper/WrapperButton/WrapperButton';
import { logIn } from '../../../assets/index';
import { style } from './style';
import { InputTextField } from '../../../components/FormFields/InputTextField/InputTextField';

const LogIn = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, getValues } = useForm({
    mode: 'onChange',
  });
  const onSubmit = () => {
    const data: any = { ...getValues() };
    // eslint-disable-next-line no-console
    console.log(data, 'filledData');
    const loggedUser = localStorage.getItem('user');
    const parsedData = loggedUser !== null ? JSON.parse(loggedUser) : '{}';
    // eslint-disable-next-line no-console
    console.log(parsedData, 'parsedData');
    const keys = Object.keys(parsedData);
    // eslint-disable-next-line no-console
    console.log(keys, 'object Keys');
    if (parsedData === data) {
      navigate('/slideshow');
    } else {
      // eslint-disable-next-line no-console
      console.log('Wrong Credentials');
    }
  };
  return (
    <Box sx={style.signupContainer}>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Box sx={style.authContainer}>
            <Typography sx={style.logoTitle}>CPR International</Typography>
            <Typography sx={style.welcomeText}>
              Welcome to CPR International
            </Typography>
            <Typography sx={style.logInText}>
              Please login to your account
            </Typography>

            <Grid>
              <Form onSubmit={handleSubmit(onSubmit)} data-testid="Slideshow">
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    name={'email'}
                    control={control}
                    placeholder={'Email'}
                  />
                </Grid>
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    name={'password'}
                    control={control}
                    placeholder={'Password'}
                  />
                </Grid>
                <Grid>
                  <WrapperButton
                    name="SUBMIT"
                    type="submit"
                    title="Log In"
                    sx={{
                      background: '#2E5D9E',
                      padding: '5px 40px 5px 40px',
                      '&:hover': {
                        background: '#fff',
                        border: '#2E5D9E',

                        color: '#2E5D9E',
                      },
                    }}
                    onClick={() => onSubmit}
                  />
                </Grid>
                <Grid>
                  <Box sx={style.socialIcons}>
                    <img
                      src={
                        'https://cdn-icons-png.flaticon.com/512/300/300221.png'
                      }
                      alt="google-signup"
                    />
                    <img
                      src={
                        'https://cdn-icons-png.flaticon.com/512/4922/4922978.png'
                      }
                      alt="google-signup"
                    />
                    <img
                      src={
                        'https://cdn-icons-png.flaticon.com/512/668/668284.png'
                      }
                      alt="google-signup"
                    />
                  </Box>
                </Grid>
              </Form>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box sx={style.rightContainer}>
            <Typography sx={style.alrightTitle}>Facing any issues ?</Typography>
            &nbsp;
            <WrapperButton title={'Forget Password'} sx={style.logInButton} />
          </Box>
          <Box sx={style.signupImage}>
            <img src={logIn} alt={'signup'} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogIn;
