import IconButton from '@mui/material/IconButton';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';
import React from 'react';

const iconButtonStyles = (position) => ({
  position: 'absolute',
  top: '50%',
  padding: 0.5,
  [position]: 10,
  zIndex: 10,
  backdropFilter: 'brightness(50%)',
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
        <NavigateBefore color="primary" />
      </IconButton>
      <IconButton
        className="swiper-button-next"
        sx={navNextButtonStyles(isEnd)}
      >
        <NavigateNext color="primary" />
      </IconButton>
    </>
  );
});
