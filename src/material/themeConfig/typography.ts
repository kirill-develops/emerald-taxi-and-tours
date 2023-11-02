import { DM_Sans } from "next/font/google";
import { Lobster } from "next/font/google";
import { mediaQueryObj } from './breakpoints';


export const dm_sans = DM_Sans({ subsets: ['latin'], display: 'swap' })
export const lobster = Lobster({ weight: ['400'], subsets: ['latin'], display: 'swap' })

export const themeTypography = {
   fontFamily: dm_sans.style.fontFamily,
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
      [mediaQueryObj.sm]: {
         fontSize: '0.875rem'
      }
   },
   smallBold: {
      fontWeight: 700,
      fontSize: '0.9rem',
      lineHeight: 1.15,
      letterSpacing: '0.0075em',
      [mediaQueryObj.sm]: {
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
      fontWeight: 500,
      fontSize: '0.77rem',
      lineHeight: 1.15,
      letterSpacing: '0.03333em',
      [mediaQueryObj.sm]: {
         lineHeight: 1.2,
         fontSize: '0.72rem'
      }
   }
}