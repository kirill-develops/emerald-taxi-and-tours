import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react';

const IconWrapper = styled(IconButton)(({ theme, position, isDisabled }) => ({
  position: 'absolute',
  zIndex: 2,
  top: '50%',
  transform: 'translate(0,-50%)',
  [position]: -15,
  height: 28,
  width: 28,
  borderRadius: '50%',
  boxShadow: isDisabled ? theme.shadows[0] : theme.shadows[4],
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.tertiary.main,
  opacity: isDisabled ? 0 : 1,
  transition: 'opacity 0.3s, boxShadow 0.3s',

  '&:hover': {
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.tertiary.main,
    filter: 'brightness(96.5%)',
  },

  '&:active': {
    boxShadow: theme.shadows[1],
  },
}));

const svgStyles = { width: '1.2rem' };

export default React.memo(function NavigationButtons({
  isStart,
  isEnd,
  type,
  ...rest
}) {
  return (
    <>
      <IconWrapper
        className={`swiper-button-prev__${type}`}
        isDisabled={isStart}
        position="left"
        {...rest}
      >
        <NavigateBeforeIcon sx={svgStyles} />
      </IconWrapper>
      <IconWrapper
        className={`swiper-button-next__${type}`}
        isDisabled={isEnd}
        position="right"
        {...rest}
      >
        <NavigateNextIcon sx={svgStyles} />
      </IconWrapper>
    </>
  );
});
