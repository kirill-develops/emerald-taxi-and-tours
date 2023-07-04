import Button from '@mui/material/Button';
import React from 'react';
import useBackButton from '../hooks/useBackButton';

export default React.memo(function BackButton({ ...rest }) {
  const { handleBackClick, isFirstStep } = useBackButton();

  return (
    <Button
      onClick={handleBackClick}
      disabled={isFirstStep}
      variant="outlined"
      {...rest}
    >
      Prev
    </Button>
  );
});
