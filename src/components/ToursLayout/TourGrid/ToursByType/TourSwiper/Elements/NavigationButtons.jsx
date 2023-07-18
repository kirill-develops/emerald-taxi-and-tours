import IconButton from '@mui/material/IconButton';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';
import React from 'react';

const iconButtonStyles = (position) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  borderRadius: 0,
  padding: 0,
  [position]: -1,
  zIndex: 1,
  '&: hover': { color: (theme) => theme.palette.primary.main },
  backgroundColor: (theme) => theme.palette.background.default,
  backdropFilter: 'brightness(30%) blur(0.5px)',
});

const navBackButtonStyles = (isStart) => ({
  ...iconButtonStyles('left'),
  display: isStart ? 'none' : 'inline-flex',
});

const navNextButtonStyles = (isEnd) => ({
  ...iconButtonStyles('right'),
  display: isEnd ? 'none' : 'inline-flex',
});

export default React.memo(function NavigationButtons({ isStart, isEnd }) {
  return (
    <>
      <IconButton
        className="swiper-button-prev"
        sx={navBackButtonStyles(isStart)}
      >
        <NavigateBefore />
      </IconButton>
      <IconButton
        className="swiper-button-next"
        sx={navNextButtonStyles(isEnd)}
      >
        <NavigateNext />
      </IconButton>
    </>
  );
});
