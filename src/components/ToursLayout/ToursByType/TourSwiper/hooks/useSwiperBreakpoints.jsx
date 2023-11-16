import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

export default function useSwiperBreakpoints() {
  const muiBreakpoints = useTheme().breakpoints.values;

  return useMemo(
    () => ({
      [muiBreakpoints.xs]: { slidesPerView: 1.2 },
      [muiBreakpoints.sm]: { slidesPerView: 2.3 },
      [muiBreakpoints.md]: { slidesPerView: 4 },
    }),
    [muiBreakpoints],
  );
}
