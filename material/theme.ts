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
  }
});
theme = responsiveFontSizes(theme);

export const darkTheme = createTheme({ palette: { mode: 'dark' } });
