import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';

function StepButtonsStack({ children, ...rest }) {
  return useMemo(
    () => (
      <Stack
        spacing={3}
        direction="row"
        justifyContent="flex-end"
        {...rest}
      >
        {children}
      </Stack>
    ),
    [children, rest],
  );
}

export default React.memo(function StepButtons({ backButton, nextButton }) {
  return (
    <StepButtonsStack>
      {backButton}
      {nextButton}
    </StepButtonsStack>
  );
});
