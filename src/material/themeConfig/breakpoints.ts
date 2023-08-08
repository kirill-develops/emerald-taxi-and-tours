export const themeBreakpoints = { values: { xxs: 0, xs: 320, sm: 670, md: 900, lg: 1200, xl: 1536 } }

export const mediaQueryObj = {
   xs: `@media (min-width: ${themeBreakpoints.values.xs}px)`,
   sm: `@media (min-width: ${themeBreakpoints.values.sm}px)`,
   md: `@media (min-width: ${themeBreakpoints.values.md}px)`,
   lg: `@media (min-width: ${themeBreakpoints.values.lg}px)`,
   xl: `@media (min-width: ${themeBreakpoints.values.xl}px)`,
};