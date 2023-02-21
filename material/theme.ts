import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Roboto } from '@next/font/google';


export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const gridSpacingProps = { xs: 1, sm: 2, md: 3, lg: 3.5 };

export const cardStyleProps = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};


export let theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0e6738'
    },
    secondary: {
      main: "#fead14"
    },
    background: {
      default: '#f2f4f3',
      paper: '#fafafa'
    },
    error: { main: '#d138bf' },
    warning: { main: '#fe654f' },
    info: { main: '#51E5FF' },
    success: { main: '#8BBF9F' }
  }
});
theme = responsiveFontSizes(theme);

export let darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: "#fead14"
    },
    secondary: {
      main: '#0e6738'
    },
    background: {
      default: '#191919',
      paper: '#202C37'
    },
    error: { main: '#d138bf' },
    warning: { main: '#fe654f' },
    info: { main: '#51E5FF' },
    success: { main: '#8BBF9F' }
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
        },
        fixed: {
          display: 'flex',
          height: '100%',
          alignSelf: 'center'
        }
      }
    }
  }
});

darkTheme = responsiveFontSizes(darkTheme);