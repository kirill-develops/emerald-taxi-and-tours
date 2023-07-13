import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import React from 'react';

export default function MaxWidthContainer({
  maxWidth = 'xl',
  children,
  disableStack = false,
  rowGap = 3,
  ...others
}) {
  const containerProps = {
    maxWidth,
    ...others,
  };

  return (
    <Container {...containerProps}>
      {!disableStack ? (
        <Stack
          direction="column"
          rowGap={rowGap}
        >
          {children}
        </Stack>
      ) : (
        children
      )}
    </Container>
  );
}
