import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import React, { useMemo } from 'react';

export default React.memo(function MaxWidthContainer({
  maxWidth = 'xl',
  disableStack = false,
  rowGap = 3,
  children,
  ...others
}) {
  const containerProps = useMemo(
    () => ({
      maxWidth,
      ...others,
    }),
    [maxWidth, others],
  );

  const content = useMemo(() => {
    if (disableStack) {
      return children;
    } else {
      return (
        <Stack
          direction="column"
          rowGap={rowGap}
        >
          {children}
        </Stack>
      );
    }
  }, [disableStack, rowGap, children]);

  return <Container {...containerProps}>{content}</Container>;
});
