import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import SectionTitle from '@elements/SectionTitle';

const containerStyles = { zIndex: 1 };

export default React.memo(function HomeSection({
  title,
  sx,
  children,
  ...rest
}) {
  const stackStyles = useMemo(() => ({ py: 5, height: '100%', ...sx }), [sx]);

  return (
    <Stack
      rowGap={3}
      sx={stackStyles}
      {...rest}
    >
      <SectionTitle maxWidth="lg">{title}</SectionTitle>
      <MaxWidthContainer
        maxWidth="md"
        disableStack
        sx={containerStyles}
      >
        {children}
      </MaxWidthContainer>
    </Stack>
  );
});
