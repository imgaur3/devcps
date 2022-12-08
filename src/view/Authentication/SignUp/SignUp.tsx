import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { SignUpImage } from '../../../assets/index';
import { signUp } from '../../../redux/Actions';
import { WrapperButton, InputTextField } from '../../../components/index';
import { signUpSchema } from './validation';
import { style } from './style';

const SignUp = () => {
  const dispatchAction = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control, getValues } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = () => {
    setIsLoading(false);
    const data = { ...getValues() };
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/login');
    dispatchAction(
      signUp({
        name: get(data, 'name'),
        email: get(data, 'email'),
        password: get(data, 'password'),
      }),
    );
    // eslint-disable-next-line no-console
    console.log(signUp);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/login`;
    navigate(path);
  };
  return (
    <Box sx={style.signupContainer}>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Box sx={style.authContainer}>
            <Typography sx={style.logoTitle}>CPS International</Typography>
            <Typography sx={style.welcomeText}>
              Welcome to CPR International
            </Typography>

            <Grid>
              <form onSubmit={handleSubmit(onSubmit)} data-testid="Slideshow">
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    name={'name'}
                    control={control}
                    placeholder={'Username'}
                  />
                </Grid>
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    name={'email'}
                    control={control}
                    placeholder={'Email'}
                  />
                </Grid>
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    type="password"
                    name={'password'}
                    control={control}
                    placeholder={'Password'}
                  />
                </Grid>
                <Grid>
                  <WrapperButton
                    name="SUBMIT"
                    type="submit"
                    title="Sign Up"
                    sx={{
                      background: '#2E5D9E',
                      padding: '5px 40px 5px 40px',
                      '&:hover': {
                        background: '#fff',
                        border: '#2E5D9E',

                        color: '#2E5D9E',
                      },
                    }}
                    isLoading={isLoading}
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
              </form>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box sx={{ textAlign: 'right', padding: 2 }}>
            <Typography sx={style.alrightTitle}>
              Already have an account?
            </Typography>
            &nbsp;
            <WrapperButton
              title={'Log In'}
              sx={style.logInButton}
              onClick={routeChange}
            />
          </Box>
          <Box sx={style.signupImage}>
            <img src={SignUpImage} alt={'signup'} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
