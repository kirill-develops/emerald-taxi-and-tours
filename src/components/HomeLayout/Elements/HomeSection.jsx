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
  disableGutters = false,
  center = false,
  ...rest
}) {
  const stackStyles = useMemo(
    () => ({
      pt: 3,
      pb: 5,
      height: '100%',
      rowGap: 3,
      ...sx,
    }),
    [sx],
  );

  const sectionTitle = useMemo(() => {
    if (!title) {
      return;
    }

    return (
      <SectionTitle
        maxWidth="lg"
        sx={titleStyles}
      >
        {title}
      </SectionTitle>
    );
  }, [title, titleStyles]);

  return (
    <Stack
      sx={stackStyles}
      {...rest}
    >
      {sectionTitle}
      <MaxWidthContainer
        maxWidth="lg"
        disableStack
        disableGutters={disableGutters}
        sx={containerStyles(center)}
      >
        {children}
      </MaxWidthContainer>
    </Stack>
  );
});
