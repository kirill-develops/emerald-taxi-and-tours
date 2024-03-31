import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React, { useCallback, useMemo, useState } from 'react';
import NavigationButtons from './Elements/NavigationButtons';
import useSwiperBreakpoints from './hooks/useSwiperBreakpoints';
import { checkUnrecognizedProps } from '../../helperFunctions';

const SwiperWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({ position: 'relative' }),
);

const StyledSwiper = styled((props) => <Swiper {...props} />, {
  shouldForwardProp: (prop) => prop !== 'isLessMdBreakpoint',
})(({ theme, isLessMdBreakpoint }) =>
  theme.unstable_sx({
    px: isLessMdBreakpoint
      ? { xxs: '16px !important', sm: '24px !important' }
      : null,
  }),
);

export default React.memo(function PageSwiper({
  children,
  id,
  slidesPerView = 1,
  swiperBreakpointSettings,
  wrapperProps,
  swiperProps,
  buttonProps,
  ...rest
}) {
  const { swiperPosition, handleSwiperPosition } = useSwiperPosition();
  const { isStart, isEnd } = swiperPosition;

  const isLessMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  const defaultBreakpointSettings = useSwiperBreakpoints();

  const breakpointSettings = useMemo(
    () => swiperBreakpointSettings ?? defaultBreakpointSettings,
    [swiperBreakpointSettings, defaultBreakpointSettings],
  );

  checkUnrecognizedProps('PageSwiper', rest);

  return (
    <SwiperWrapper {...wrapperProps}>
      <StyledSwiper
        slidesPerView={slidesPerView}
        breakpoints={breakpointSettings}
        isLessMdBreakpoint={isLessMdBreakpoint}
        spaceBetween={10}
        modules={[Navigation]}
        onSwiper={handleSwiperPosition}
        onSlideChange={handleSwiperPosition}
        navigation={{
          prevEl: `.swiper-button-prev__${id}`,
          nextEl: `.swiper-button-next__${id}`,
        }}
        updateOnWindowResize
        {...swiperProps}
      >
        {children}
      </StyledSwiper>
      <NavigationButtons
        isStart={isStart}
        isEnd={isEnd}
        type={id}
        {...buttonProps}
      />
    </SwiperWrapper>
  );
});

function useSwiperPosition() {
  const [swiperPosition, setSwiperPosition] = useState({
    isStart: true,
    isEnd: false,
  });

  const handleSwiperPosition = useCallback((swiper) => {
    setSwiperPosition({
      isStart: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  }, []);

  return { swiperPosition, handleSwiperPosition };
}
