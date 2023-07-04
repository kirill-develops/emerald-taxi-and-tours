import Button from '@mui/material/Button';
import React from 'react';
import useNextButton from '../hooks/useNextButton';

export default React.memo(function NextButton({ ...rest }) {
  const { handleNextClick, buttonScript } = useNextButton();

  return (
    <Button
      onClick={handleNextClick}
      variant="contained"
      {...rest}
    >
      {buttonScript}
    </Button>
  );
});
