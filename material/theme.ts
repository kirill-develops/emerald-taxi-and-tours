import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Roboto } from '@next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


export let theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  }
});
theme = responsiveFontSizes(theme);

export const lightTheme = createTheme(theme, {});
export const darkTheme = createTheme(theme, {});