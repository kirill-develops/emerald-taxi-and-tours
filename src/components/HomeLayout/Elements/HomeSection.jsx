import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import SectionTitle from '@elements/SectionTitle';

const containerStyle = (center, containerStyles) => ({
  ...containerStyles,
  zIndex: 1,
  display: center ? 'grid' : null,
  justifyContent: center ? 'center' : null,
});

export default React.memo(function HomeSection({
  title,
  titleStyles,
  sx,
  children,
  containerStyles,
  disableGutters = false,
  center = false,
  maxWidth = 'lg',
  ...rest
}) {
  const stackStyles = useMemo(
    () => ({
      pt: 3,
      pb: 5,
      height: '100%',
      rowGap: 2,
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
        maxWidth={maxWidth}
        disableStack
        disableGutters={disableGutters}
        sx={containerStyle(center, containerStyles)}
      >
        {children}
      </MaxWidthContainer>
    </Stack>
  );
});
