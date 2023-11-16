import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

export default function useSwiperBreakpoints() {
  const muiBreakpoints = useTheme().breakpoints.values;

  return useMemo(
    () => ({
      [muiBreakpoints.xs]: { slidesPerView: 1.4 },
      [muiBreakpoints.sm]: { slidesPerView: 2.6 },
      [muiBreakpoints.md]: { slidesPerView: 3, spaceBetween: 16 },
    }),
    [muiBreakpoints],
  );
}
