import { breakpointMediaQueries } from "./breakpoints";
import { dm_sans, lobster } from "./typography";

function getResponsiveTypographyVariant(theme, variant) {
   const variantProps = theme.typography[variant];
   const styleOverrides = { ...variantProps };

   Object.keys(breakpointMediaQueries).forEach((breakpoint) => {
      if (variantProps[breakpointMediaQueries[breakpoint]]) {
         styleOverrides[breakpointMediaQueries[breakpoint]] = variantProps[breakpointMediaQueries[breakpoint]];
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
   MuiButton: {
      styleOverrides: {
         root: ({ ownerState }) => {

            if (ownerState?.body) {
               return ({
                  fontFamily: dm_sans.style.fontFamily
               })
            }
         }
      }
   },
   MuiTypography: {
      defaultProps: {
         variantMapping: {
            smallBold: 'h5',
            smallCaption: 'h6'
         }
      },
      styleOverrides: {
         root: ({ ownerState }) => {

            if (ownerState?.altfont) {
               return ({
                  fontFamily: lobster.style.fontFamily
               })
            } else if (ownerState?.body) {
               return ({
                  fontFamily: dm_sans.style.fontFamily
               })
            }
         }
      }
   }
}