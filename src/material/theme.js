import { createTheme, responsiveFontSizes } from "@mui/material/styles";
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
      green: '#288c05'
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
    },
    divider: '#817567',
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
    },
    divider: '#9c8f80',
  },
  shadows: [
    "none"
    ,
    "0px 2px 1px -1px rgba(10,10,10,0.2),0px 1px 1px 0px rgba(10,10,10,0.14),0px 1px 3px 0px rgba(10,10,10,0.12)"
    ,
    "0px 3px 1px -2px rgba(10,10,10,0.2),0px 2px 2px 0px rgba(10,10,10,0.14),0px 1px 5px 0px rgba(10,10,10,0.12)"
    ,
    "0px 3px 3px -2px rgba(10,10,10,0.2),0px 3px 4px 0px rgba(10,10,10,0.14),0px 1px 8px 0px rgba(10,10,10,0.12)"
    ,
    "0px 2px 4px -1px rgba(10,10,10,0.2),0px 4px 5px 0px rgba(10,10,10,0.14),0px 1px 10px 0px rgba(10,10,10,0.12)"
    , "0px 3px 5px -1px rgba(10,10,10,0.2),0px 5px 8px 0px rgba(10,10,10,0.14),0px 1px 14px 0px rgba(10,10,10,0.12)"
    , "0px 3px 5px -1px rgba(10,10,10,0.2),0px 6px 10px 0px rgba(10,10,10,0.14),0px 1px 18px 0px rgba(10,10,10,0.12)"
    , "0px 4px 5px -2px rgba(10,10,10,0.2),0px 7px 10px 1px rgba(10,10,10,0.14),0px 2px 16px 1px rgba(10,10,10,0.12)"
    , "0px 5px 5px -3px rgba(10,10,10,0.2),0px 8px 10px 1px rgba(10,10,10,0.14),0px 3px 14px 2px rgba(10,10,10,0.12)"
    , "0px 5px 6px -3px rgba(10,10,10,0.2),0px 9px 12px 1px rgba(10,10,10,0.14),0px 3px 16px 2px rgba(10,10,10,0.12)"
    , "0px 6px 6px -3px rgba(10,10,10,0.2),0px 10px 14px 1px rgba(10,10,10,0.14),0px 4px 18px 3px rgba(10,10,10,0.12)"
    , "0px 6px 7px -4px rgba(10,10,10,0.2),0px 11px 15px 1px rgba(10,10,10,0.14),0px 4px 20px 3px rgba(10,10,10,0.12)"
    , "0px 7px 8px -4px rgba(10,10,10,0.2),0px 12px 17px 2px rgba(10,10,10,0.14),0px 5px 22px 4px rgba(10,10,10,0.12)"
    , "0px 7px 8px -4px rgba(10,10,10,0.2),0px 13px 19px 2px rgba(10,10,10,0.14),0px 5px 24px 4px rgba(10,10,10,0.12)"
    , "0px 7px 9px -4px rgba(10,10,10,0.2),0px 14px 21px 2px rgba(10,10,10,0.14),0px 5px 26px 4px rgba(10,10,10,0.12)"
    ,
    "0px 8px 9px -5px rgba(10,10,10,0.2),0px 15px 22px 2px rgba(10,10,10,0.14),0px 6px 28px 5px rgba(10,10,10,0.12)"
    ,
    "0px 8px 10px -5px rgba(10,10,10,0.2),0px 16px 24px 2px rgba(10,10,10,0.14),0px 6px 30px 5px rgba(10,10,10,0.12)"
    ,
    "0px 8px 11px -5px rgba(10,10,10,0.2),0px 17px 26px 2px rgba(10,10,10,0.14),0px 6px 32px 5px rgba(10,10,10,0.12)"
    ,
    "0px 9px 11px -5px rgba(10,10,10,0.2),0px 18px 28px 2px rgba(10,10,10,0.14),0px 7px 34px 6px rgba(10,10,10,0.12)"
    ,
    "0px 9px 12px -6px rgba(10,10,10,0.2),0px 19px 29px 2px rgba(10,10,10,0.14),0px 7px 36px 6px rgba(10,10,10,0.12)"
    ,
    "0px 10px 13px -6px rgba(10,10,10,0.2),0px 20px 31px 3px rgba(10,10,10,0.14),0px 8px 38px 7px rgba(10,10,10,0.12)"
    ,
    "0px 10px 13px -6px rgba(10,10,10,0.2),0px 21px 33px 3px rgba(10,10,10,0.14),0px 8px 40px 7px rgba(10,10,10,0.12)"
    ,
    "0px 10px 14px -6px rgba(10,10,10,0.2),0px 22px 35px 3px rgba(10,10,10,0.14),0px 8px 42px 7px rgba(10,10,10,0.12)"
    ,
    "0px 11px 14px -7px rgba(10,10,10,0.2),0px 23px 36px 3px rgba(10,10,10,0.14),0px 9px 44px 8px rgba(10,10,10,0.12)"
    ,
    "0px 11px 15px -7px rgba(10,10,10,0.2),0px 24px 38px 3px rgba(10,10,10,0.14),0px 9px 46px 8px rgba(10,10,10,0.12)"],
});

const responsiveFontOptions = { factor: 100 };

theme = responsiveFontSizes(theme, responsiveFontOptions);
darkTheme = responsiveFontSizes(darkTheme, responsiveFontOptions);
