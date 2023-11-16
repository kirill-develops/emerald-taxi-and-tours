import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

const getBreakpointSettings = (breakpoints) => ({
  [breakpoints.xs]: { slidesPerView: 2.4 },
  [breakpoints.sm]: { slidesPerView: 4.3 },
  [breakpoints.md]: { slidesPerView: 6 },
});

export default function useSwiperBreakpointSettings() {
  const muiBreakpoints = useTheme().breakpoints.values;

  return useMemo(() => getBreakpointSettings(muiBreakpoints), [muiBreakpoints]);
}
