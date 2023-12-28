import { DM_Sans } from "next/font/google";
import { Lobster } from "next/font/google";
import { Playfair_Display } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { breakpointMediaQueries } from './breakpoints';


export const dm_sans = DM_Sans({ subsets: ['latin'], display: 'swap' })
export const playfair_display = Playfair_Display({ subsets: ['latin'], display: 'swap' })
export const raleway = Raleway({ subsets: ['latin'], display: 'swap' })
export const lobster = Lobster({ weight: ['400'], subsets: ['latin'], display: 'swap' })

export const themeTypography = {
   fontFamily: playfair_display.style.fontFamily,
   body1: { fontFamily: dm_sans.style.fontFamily },
   body2: { fontFamily: dm_sans.style.fontFamily },
   subtitle1: { fontFamily: dm_sans.style.fontFamily },
   subtitle2: { fontFamily: dm_sans.style.fontFamily },
   caption: { fontFamily: dm_sans.style.fontFamily },
   navTitle: {
      fontFamily: lobster.style.fontFamily,
      fontSize: '1.6875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.03375rem',
      textTransform: 'capitalize'
   },
   navLink: {
      fontFamily: dm_sans.style.fontFamily,
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      letterSpacing: '0.0525rem',
      textTransform: 'lowercase',
   },
   filterTitle: {
      fontFamily: raleway.style.fontFamily,
      fontSize: ' 1rem',
      fontStyle: 'italic',
      fontWeight: 300,
      letterSpacing: '0.15rem',
      textTransform: 'lowercase',
   },
   filterSubcategory: {
      fontFamily: raleway.style.fontFamily,
      fontSize: '0.6875rem',
      fontStyle: 'normal',
      fontWeight: 800,
      letterSpacing: '0.02063rem',
      textTransform: 'uppercase',
   },
   filterOption: {
      fontFamily: dm_sans.style.fontFamily,
      fontSize: '0.9rem',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '0.0225rem',
   },

   cardTitle: {
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.15,
      letterSpacing: '0.0175em',
   },
   cardCaption: {
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
      [breakpointMediaQueries.sm]: {
         fontSize: '0.875rem'
      }
   },
   smallBold: {
      fontWeight: 700,
      fontSize: '0.9rem',
      lineHeight: 1.15,
      letterSpacing: '0.0075em',
      [breakpointMediaQueries.sm]: {
         lineHeight: 1.2,
         fontSize: '0.85rem'
      }
   },
   smallCaption: {
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
   },
   chip: {
      fontFamily: dm_sans.style.fontFamily,
      fontWeight: 500,
      fontSize: '0.77rem',
      lineHeight: 1.15,
      letterSpacing: '0.03333em',
      [breakpointMediaQueries.sm]: {
         lineHeight: 1.2,
         fontSize: '0.72rem'
      }
   }
}