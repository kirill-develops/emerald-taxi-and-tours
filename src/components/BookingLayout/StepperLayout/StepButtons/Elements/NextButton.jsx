import Button from '@mui/material/Button';
import React from 'react';
import useNextButton from '../hooks/useNextButton';

export default React.memo(function NextButton({ ...rest }) {
  const { handleNextClick, buttonScript, isLoading } = useNextButton();

  return (
    <Button
      onClick={handleNextClick}
      variant="contained"
      disabled={isLoading}
      {...rest}
    >
      {buttonScript}
    </Button>
  );
});
