import IconButton from '@mui/material/IconButton';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';
import React from 'react';

const iconButtonStyles = (position, isDisabled) => ({
  position: 'absolute',
  bottom: '25%',
  [position]: 8,
  transform: 'translate(0,-50%)',
  zIndex: 2,
  padding: 0,
  height: 35,
  borderRadius: 1,
  boxShadow: (theme) => (isDisabled ? theme.shadows[0] : theme.shadows[6]),
  '&: hover': {
    color: (theme) => theme.palette.tertiary.container,
    backgroundColor: (theme) => theme.palette.tertiary.containerText,
    boxShadow: (theme) => theme.shadows[4],
  },
  color: (theme) => theme.palette.tertiary.contrastText,
  backgroundColor: (theme) => theme.palette.tertiary.main,
  backdropFilter: 'brightness(30%) blur(0.5px)',
});

const svgStyles = { width: '1.2rem' };

const navBackButtonStyles = (isStart) => iconButtonStyles('left', isStart);

const navNextButtonStyles = (isEnd) => iconButtonStyles('right', isEnd);

export default React.memo(function NavigationButtons({ isStart, isEnd, type }) {
  return (
    <>
      <IconButton
        className={`swiper-button-prev__${type}`}
        sx={navBackButtonStyles(isStart)}
        disabled={isStart}
      >
        <NavigateBefore sx={svgStyles} />
      </IconButton>
      <IconButton
        className={`swiper-button-next__${type}`}
        sx={navNextButtonStyles(isEnd)}
        disabled={isEnd}
      >
        <NavigateNext sx={svgStyles} />
      </IconButton>
    </>
  );
});
