import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { signUpSchema } from './validation';
import { WrapperButton } from '../../../components/index';
import { signUp } from '../../../assets/index';
import { InputTextField } from '../../../components/FormFields/InputTextField/InputTextField';
import { style } from './style';

const SignUp = () => {
  // const [input, setInput] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });
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
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/login`;
    navigate(path);
  };
  // eslint-disable-next-line no-console
  // console.log(input);
  return (
    <Box sx={style.signupContainer}>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Box sx={style.authContainer}>
            <Typography sx={style.logoTitle}>CPR International</Typography>
            <Typography sx={style.welcomeText}>
              Welcome to CPR International
            </Typography>

            <Grid>
              <Form onSubmit={handleSubmit(onSubmit)} data-testid="Slideshow">
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    name={'name'}
                    // value={name}
                    // onChange={(e: any) =>
                    //   setInput({
                    //     ...input,
                    //     [e.target.name]: e.target.value,
                    //   })
                    // }
                    control={control}
                    placeholder={'Username'}
                  />
                </Grid>
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    name={'email'}
                    // value={input.email}
                    // onChange={(e: any) =>
                    //   setInput({
                    //     ...input,
                    //     [e.target.email]: e.target.value,
                    //   })
                    // }
                    control={control}
                    placeholder={'Email'}
                  />
                </Grid>
                <Grid style={{ marginBottom: 20 }}>
                  <InputTextField
                    type="password"
                    name={'password'}
                    // value={input.password}
                    // onChange={(e: any) =>
                    //   setInput({
                    //     ...input,
                    //     [e.target.password]: e.target.value,
                    //   })
                    // }
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
              </Form>
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
            <img src={signUp} alt={'signup'} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
