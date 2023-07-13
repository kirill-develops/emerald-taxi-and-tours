import Stack from '@mui/material/Stack';
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import SectionTitle from '@elements/SectionTitle';

export default function HomeSection({ title, sx, children, ...rest }) {
  return (
    <Stack
      rowGap={3}
      sx={{ py: 5, height: '100%', ...sx }}
      {...rest}
    >
      <SectionTitle maxWidth="xl">{title}</SectionTitle>
      <MaxWidthContainer
        maxWidth="lg"
        disableStack
        sx={{ zIndex: 1 }}
      >
        {children}
      </MaxWidthContainer>
    </Stack>
  );
}
