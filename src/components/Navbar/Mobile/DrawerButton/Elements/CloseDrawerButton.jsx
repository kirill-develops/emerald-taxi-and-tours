import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledIconButton = styled(IconButton)(({ theme }) =>
  theme.unstable_sx({ position: 'absolute', top: 10, right: 10, zIndex: 10 }),
);

export default function CloseDrawerButton({ clickHandler }) {
  return (
    <StyledIconButton onClick={clickHandler}>
      <CloseIcon />
    </StyledIconButton>
  );
}
