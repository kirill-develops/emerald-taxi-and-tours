import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import React, { useMemo } from 'react';

export default React.memo(function MaxWidthContainer({
  maxWidth = 'lg',
  disableStack = false,
  rowGap = 3,
  children,
  ...rest
}) {
  const content = useMemo(() => {
    if (disableStack) {
      return children;
    }

    return (
      <Stack
        direction="column"
        rowGap={rowGap}
      >
        {children}
      </Stack>
    );
  }, [disableStack, rowGap, children]);

  return (
    <Container
      maxWidth={maxWidth}
      {...rest}
    >
      {content}
    </Container>
  );
});
