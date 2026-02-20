'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#e3f2fd',
      main: '#2196f3',
      dark: '#1e88e5',
      200: '#90caf9',
      800: '#1565c0',
    },
    secondary: {
      light: '#ede7f6',
      main: '#673ab7',
      dark: '#5e35b1',
      200: '#b39ddb',
      800: '#4527a0',
    },
    success: {
      light: '#b9f6ca',
      main: '#00e676',
      dark: '#00c853',
      200: '#69f0ae',
    },
    error: {
      light: '#ef9a9a',
      main: '#f44336',
      dark: '#c62828',
    },
    warning: {
      light: '#fff8e1',
      main: '#ffe57f',
      dark: '#ffc107',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      900: '#212121',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
      dark: '#212121',
      hint: '#9e9e9e',
    } as any,
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h1: {
      fontSize: '2.125rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.5em',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
