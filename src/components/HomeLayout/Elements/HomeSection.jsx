import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import SectionTitle from '@elements/SectionTitle';

const containerStyles = (center) => ({
  zIndex: 1,
  display: center ? 'grid' : null,
  justifyContent: center ? 'center' : null,
});

export default React.memo(function HomeSection({
  title,
  titleStyles,
  sx,
  children,
  center = false,
  ...rest
}) {
  const stackStyles = useMemo(() => ({ py: 5, height: '100%', ...sx }), [sx]);

  return (
    <Stack
      rowGap={3}
      sx={stackStyles}
      {...rest}
    >
      {title ? (
        <SectionTitle
          maxWidth="lg"
          sx={titleStyles}
        >
          {title}
        </SectionTitle>
      ) : null}
      <MaxWidthContainer
        maxWidth="md"
        disableStack
        sx={containerStyles(center)}
      >
        {children}
      </MaxWidthContainer>
    </Stack>
  );
});
