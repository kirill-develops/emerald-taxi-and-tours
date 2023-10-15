import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material/useMediaQuery';
import { useMemo } from 'react';

export default function useImageBreakpoints() {
  const theme = useTheme();

  const breakpoints = useMemo(() => theme.breakpoints.values, [theme]);

  const isXxsBreakpoint = useMediaQuery(theme.breakpoints.only('xxs'));
  const isXsBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));
  const isSmBreakpoint = useMediaQuery(theme.breakpoints.only('sm'));

  const breakpointImageLength = useMemo(() => {
    if (isXxsBreakpoint) return 1;
    if (isXsBreakpoint) return 3;
    if (isSmBreakpoint) return 4;
    return 5;
  }, [isXxsBreakpoint, isXsBreakpoint, isSmBreakpoint]);

  const muiImageSizes = useMemo(
    () => `
    (max-width: ${breakpoints.xxs}px) 100vw, 
    (max-width: ${breakpoints.xs}px) 33vw, 
    (max-width: ${breakpoints.sm}px) 25vw, 
    20vw`,
    [breakpoints],
  );

  return { breakpointImageLength, muiImageSizes };
}
