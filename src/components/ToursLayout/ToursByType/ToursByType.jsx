import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react';
import useTourByTypeDataFetcher from './hooks/useTourByTypeDataFetcher';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import TourSwiper from './TourSwiper/TourSwiper';
import { useMediaQuery } from '@mui/material';

const StyledPaper = styled((props) => (
  <Paper
    variant="outlined"
    square
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    py: 2,
    backgroundColor: (theme) => theme.palette.background.default,
    color: (theme) => theme.palette.secondary.containerText,
    position: 'relative',
    borderLeft: 'none',
    borderRight: 'none',
  }),
);

const TourSwipers = React.memo(function TourSwipers() {
  const tourDataByType = useTourByTypeDataFetcher();

  return tourDataByType
    .sort((a, b) => b?.tours?.length - a?.tours?.length)
    .map(({ type, tours }, index) => (
      <TourSwiper
        type={type}
        tours={tours}
        key={`${type}-${index}`}
      />
    ));
});

export default React.memo(function ToursByType() {
  const isLessMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <>
      <StyledPaper>
        <MaxWidthContainer
          rowGap={{ xxs: 2, md: 8 }}
          disableGutters={isLessMdBreakpoint}
        >
          <TourSwipers />
        </MaxWidthContainer>
      </StyledPaper>
    </>
  );
});
