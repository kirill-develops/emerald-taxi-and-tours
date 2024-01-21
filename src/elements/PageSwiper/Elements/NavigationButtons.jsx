import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react';

const IconWrapper = styled((props) => <IconButton {...props} />, {
  shouldForwardProp: (prop) => prop !== 'isDisabled' && prop !== 'isVisable',
})(({ theme, position, isDisabled, isVisable }) => ({
  display: isVisable ? 'inline-flex' : 'none',
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
  transition: theme.transitions.create(['opacity', 'boxShadow'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.sharp,
  }),
  '&:hover': {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.tertiary.main,
    filter: 'brightness(96.5%)',
    transition: theme.transitions.create(
      ['box-shadow', 'background-color', 'color', 'filter'],
      {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      },
    ),
  },

  '&:active': {
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(['box-shadow'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

const svgStyles = { width: '1.2rem' };

export default React.memo(function NavigationButtons({
  isStart,
  isEnd,
  type,
  ...rest
}) {
  const isMdAndUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <>
      <IconWrapper
        className={`swiper-button-prev__${type}`}
        isDisabled={isStart}
        isVisable={isMdAndUp}
        position="left"
        {...rest}
      >
        <NavigateBeforeIcon sx={svgStyles} />
      </IconWrapper>
      <IconWrapper
        className={`swiper-button-next__${type}`}
        isDisabled={isEnd}
        isVisable={isMdAndUp}
        position="right"
        {...rest}
      >
        <NavigateNextIcon sx={svgStyles} />
      </IconWrapper>
    </>
  );
});
