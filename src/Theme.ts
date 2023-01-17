import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E9DCC8', // Dark Orange
      dark: '#FFF8F3',
      light: '#FFFCF9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E2D0B6', // Light Orange
      dark: '#FFC29F',
      light: '#FFFCF9',
      contrastText: '#FFFFFF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    error: {
      main: '#FF0000',
      dark: '#b74e3e',
      light: '#FFF1F1', // #FFEEEE
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFA726',
      dark: '#F57C00',
      light: '#FFB74D',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#29B6F6',
      dark: '#0288D1',
      light: '#4FC3F7',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#66BB6A',
      dark: '#388E3C',
      light: '#81C784',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#2E5D9E',
      secondary: '#C39F6A',
      disabled: '#E5E5E5',
    },
    grey: {
      50: '#F8F8F8',
      100: '#979797',
      200: '#6A6A6A',
      300: '#464E5F',
      400: '#F4F4F4',
      500: '#262A41',
      600: '#FFF4EE', //
      700: '#F3F6F9', //
      800: '#818E9A',
      900: '#16192C',
      A100: '#2E5D9E', //Blue
      A200: '#EC4B46', //Red
      A400: '#9FA3A8',
      A700: '#EFF3F6',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  shadows: [
    'none',
    '0px 18px 32px rgba(208, 210, 218, 0.15)',
    '3px 0px 6px rgba(0, 0, 0, 0.06);',
    '0px 9px 6px rgba(0, 0, 0, 0.06);',
    '0px 6px 6px rgba(0, 0, 0, 0.06);',
    '0px 4px 4px rgba(0, 0, 0, 0.25);',
    '0px 6px 25px rgba(0, 0, 0, 0.08);',
    '0px 6px 9px rgba(0, 0, 0, 0.1);',
    '0px 1px 5px rgba(0, 0, 0, 0.18)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
});
