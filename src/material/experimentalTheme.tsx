import { experimental_extendTheme, responsiveFontSizes } from "@mui/material";

export let experimentalTheme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#006D3A',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#FEAD14',
          contrastText: '#442B00',
        },
        info: {
          main: '#35BAB1',
        },
        error: {
          main: '#BA1A1A',
          contrastText: '#FFDAD6',
        },
        success: {
          main: '#76DF2D',
        },
        warning: {
          main: '#ff5f4d',
        },
        background: {
          default: '#FBFDF7',
          paper: '#DDE5DB',
        },
        text: {
          secondary: '#414941',
          primary: '#191C19',
          disabled: '#717971',
        },
        divider: '#C1C9BF',
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#FFB951',
          contrastText: '#442B00',
        },
        secondary: {
          main: '#35BA6F',
          contrastText: '#00391C',
        },
        info: {
          main: '#35BAB1',
        },
        error: {
          main: '#BA1A1A',
          contrastText: '#FFDAD6',
        },
        success: {
          main: '#76DF2D',
        },
        warning: {
          main: '#ff5f4d',
        },
        background: {
          default: '#1F1B16',
          paper: '#202C37',
        },
        text: {
          disabled: '#414941',
          primary: '#E1E3DE',
          secondary: '#D1C5B4',
        },
        divider: '#4F4539',
      },
    },
  },
  shadows: [
    "none"
    ,
    "0px 2px 1px -1px rgba(255,255,255,0.2),0px 1px 1px 0px rgba(255,255,255,0.14),0px 1px 3px 0px rgba(255,255,255,0.12)"
    ,
    "0px 3px 1px -2px rgba(255,255,255,0.2),0px 2px 2px 0px rgba(255,255,255,0.14),0px 1px 5px 0px rgba(255,255,255,0.12)"
    ,
    "0px 3px 3px -2px rgba(255,255,255,0.2),0px 3px 4px 0px rgba(255,255,255,0.14),0px 1px 8px 0px rgba(255,255,255,0.12)"
    ,
    "0px 2px 4px -1px rgba(255,255,255,0.2),0px 4px 5px 0px rgba(255,255,255,0.14),0px 1px 10px 0px rgba(255,255,255,0.12)"
    , "0px 3px 5px -1px rgba(255,255,255,0.2),0px 5px 8px 0px rgba(255,255,255,0.14),0px 1px 14px 0px rgba(255,255,255,0.12)"
    , "0px 3px 5px -1px rgba(255,255,255,0.2),0px 6px 10px 0px rgba(255,255,255,0.14),0px 1px 18px 0px rgba(255,255,255,0.12)"
    , "0px 4px 5px -2px rgba(255,255,255,0.2),0px 7px 10px 1px rgba(255,255,255,0.14),0px 2px 16px 1px rgba(255,255,255,0.12)"
    , "0px 5px 5px -3px rgba(255,255,255,0.2),0px 8px 10px 1px rgba(255,255,255,0.14),0px 3px 14px 2px rgba(255,255,255,0.12)"
    , "0px 5px 6px -3px rgba(255,255,255,0.2),0px 9px 12px 1px rgba(255,255,255,0.14),0px 3px 16px 2px rgba(255,255,255,0.12)"
    , "0px 6px 6px -3px rgba(255,255,255,0.2),0px 10px 14px 1px rgba(255,255,255,0.14),0px 4px 18px 3px rgba(255,255,255,0.12)"
    , "0px 6px 7px -4px rgba(255,255,255,0.2),0px 11px 15px 1px rgba(255,255,255,0.14),0px 4px 20px 3px rgba(255,255,255,0.12)"
    , "0px 7px 8px -4px rgba(255,255,255,0.2),0px 12px 17px 2px rgba(255,255,255,0.14),0px 5px 22px 4px rgba(255,255,255,0.12)"
    , "0px 7px 8px -4px rgba(255,255,255,0.2),0px 13px 19px 2px rgba(255,255,255,0.14),0px 5px 24px 4px rgba(255,255,255,0.12)"
    , "0px 7px 9px -4px rgba(255,255,255,0.2),0px 14px 21px 2px rgba(255,255,255,0.14),0px 5px 26px 4px rgba(255,255,255,0.12)"
    ,
    "0px 8px 9px -5px rgba(255,255,255,0.2),0px 15px 22px 2px rgba(255,255,255,0.14),0px 6px 28px 5px rgba(255,255,255,0.12)"
    ,
    "0px 8px 10px -5px rgba(255,255,255,0.2),0px 16px 24px 2px rgba(255,255,255,0.14),0px 6px 30px 5px rgba(255,255,255,0.12)"
    ,
    "0px 8px 11px -5px rgba(255,255,255,0.2),0px 17px 26px 2px rgba(255,255,255,0.14),0px 6px 32px 5px rgba(255,255,255,0.12)"
    ,
    "0px 9px 11px -5px rgba(255,255,255,0.2),0px 18px 28px 2px rgba(255,255,255,0.14),0px 7px 34px 6px rgba(255,255,255,0.12)"
    ,
    "0px 9px 12px -6px rgba(255,255,255,0.2),0px 19px 29px 2px rgba(255,255,255,0.14),0px 7px 36px 6px rgba(255,255,255,0.12)"
    ,
    "0px 10px 13px -6px rgba(255,255,255,0.2),0px 20px 31px 3px rgba(255,255,255,0.14),0px 8px 38px 7px rgba(255,255,255,0.12)"
    ,
    "0px 10px 13px -6px rgba(255,255,255,0.2),0px 21px 33px 3px rgba(255,255,255,0.14),0px 8px 40px 7px rgba(255,255,255,0.12)"
    ,
    "0px 10px 14px -6px rgba(255,255,255,0.2),0px 22px 35px 3px rgba(255,255,255,0.14),0px 8px 42px 7px rgba(255,255,255,0.12)"
    ,
    "0px 11px 14px -7px rgba(255,255,255,0.2),0px 23px 36px 3px rgba(255,255,255,0.14),0px 9px 44px 8px rgba(255,255,255,0.12)"
    ,
    "0px 11px 15px -7px rgba(255,255,255,0.2),0px 24px 38px 3px rgba(255,255,255,0.14),0px 9px 46px 8px rgba(255,255,255,0.12)"],
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