import { createTheme, lighten, responsiveFontSizes } from "@mui/material/styles";
import { themeBreakpoints } from "./themeConfig/breakpoints";
import { themeTypography } from "./themeConfig/typography";
import { themeComponents } from "./themeConfig/components";

const defaultThemeProps = {
  breakpoints: themeBreakpoints,
  typography: themeTypography,
  components: themeComponents,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      green: '#288c05',
      yellow: '#ffb952',
      mint: '#b8cda1'
    }
  }
}

export let theme = createTheme({
  ...defaultThemeProps,
  palette: {
    ...defaultThemeProps.palette,
    mode: 'light',
    primary: {
      main: '#825500',
      contrastText: '#ffffff',
      container: "#ffddb3",
      containerText: '#291800',
    },
    secondary: {
      main: '#705b40',
      contrastText: '#ffffff',
      container: "#fbdebc",
      containerText: '#271904',
    },
    tertiary: {
      main: '#52643f',
      contrastText: '#ffffff',
      container: '#d4eabb',
      containerText: '#102003'
    },
    error: {
      main: '#ba1a1a',
      contrastText: '#ffffff',
      container: "#ffdad6",
      containerText: '#410002',
    },
    success: {
      main: '#76DF2D',
    },
    warning: {
      main: '#ff5f4d',
    },
    background: {
      default: '#fffbff',
      paper: '#f6faf6',
      variant: '#f0e0cf',
      variantText: '#4f4539'
    },
    text: {
      secondary: '#414941',
      primary: '#191C19',
      disabled: '#717971',
      strong: '#000'
    },
    divider: '#e5e5e5',
  },
});


export let darkTheme = createTheme({
  ...defaultThemeProps,
  palette: {
    ...defaultThemeProps.palette,
    mode: 'dark',
    primary: {
      main: '#ffb952',
      contrastText: '#452b00',
      container: "#633f00",
      containerText: '#ffddb3',
    },
    secondary: {
      main: '#ddc2a1',
      contrastText: '#3e2d16',
      container: "#56442a",
      containerText: '#fbdebc',
    },
    tertiary: {
      main: '#b8cda1',
      contrastText: '#253515',
      container: '#3a4c2a',
      containerText: '#d4eabb'
    },
    error: {
      main: '#ffb4ab',
      contrastText: '#690005',
      container: "#93000a",
      containerText: '#ffdad6',
    },
    success: {
      main: '#76DF2D',
    },
    warning: {
      main: '#ff5f4d',
    },
    background: {
      default: '#1F1B16',
      paper: '#242930',
      variant: '#4f4539',
      variantText: '#d3c4b4'
    },
    text: {
      disabled: '#414941',
      primary: '#eae1d9',
      secondary: '#D1C5B4',
      strong: '#fff'
    },
    divider: '#9c8f80',
  },
});

const responsiveFontOptions = { factor: 100 };

theme = responsiveFontSizes(theme, responsiveFontOptions);
darkTheme = responsiveFontSizes(darkTheme, responsiveFontOptions);
