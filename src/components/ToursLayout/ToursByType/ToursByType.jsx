import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import React from 'react';
import useTourByTypeDataFetcher from './hooks/useTourByTypeDataFetcher';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import TourSwiper from './TourSwiper/TourSwiper';

const StyledDivider = styled((props) => (
  <Divider
    variant="middle"
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ mx: 6 }));

export default React.memo(function ToursByType() {
  const isLessMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <MaxWidthContainer
      rowGap={{ xxs: 5, md: 8 }}
      disableGutters={isLessMdBreakpoint}
    >
      <TourSwipers />
    </MaxWidthContainer>
  );
});

const isNotLast = (index, arrayLength) => index < arrayLength - 1;

const TourSwipers = React.memo(function TourSwipers() {
  const tourDataByType = useTourByTypeDataFetcher();

  return tourDataByType
    .sort((a, b) => b?.tours?.length - a?.tours?.length)
    .map(({ type, tours }, index, array) => (
      <React.Fragment key={`${type}-${index}`}>
        <TourSwiper
          type={type}
          tours={tours}
        />
        {isNotLast(index, array.length) && <StyledDivider />}
      </React.Fragment>
    ));
});
