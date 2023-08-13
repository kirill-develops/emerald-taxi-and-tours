import { mediaQueryObj } from "./breakpoints";

function getResponsiveTypographyVariant(theme: Theme, variant: string) {
   const variantProps = theme.typography[variant];
   const styleOverrides = { ...variantProps };

   Object.keys(mediaQueryObj).forEach((key) => {
      if (variantProps[mediaQueryObj[key]]) {
         styleOverrides[mediaQueryObj[key]] = variantProps[mediaQueryObj[key]];
      }
   });

   return styleOverrides;
}

export const themeComponents = {
   MuiInputBase: {
      styleOverrides: {
         root: ({ theme }) => ({ '&.Mui-focused': { backgroundColor: theme.palette.secondary.container } })
      }
   },
   MuiChip: {
      styleOverrides: {
         root: ({ theme }) => getResponsiveTypographyVariant(theme, 'chip')
      }
   },
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
   },
   MuiIconButton: {
      styleOverrides: {
         root: {
            borderRadius: 16
         }
      }
   },
   MuiSelect: {
      styleOverrides: {
         select: {
            display: 'grid'
         },
      },
   },
   MuiTypography: {
      defaultProps: {
         variantMapping: {
            h1: 'h1',
            smallBold: 'h5',
            smallCaption: 'h6'
         }
      }
   }
}