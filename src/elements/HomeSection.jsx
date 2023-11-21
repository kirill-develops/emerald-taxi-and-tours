import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import SectionTitle from '@elements/SectionTitle';

const containerStyle = (center, containerStyles) => ({
  ...containerStyles,
  zIndex: 1,
  display: center ? 'grid' : null,
  justifyContent: center ? 'center' : null,
});

const StyledStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    pb: 5,
    height: '100%',
    rowGap: { xxs: 2, sm: 3 },
  }),
);

export default React.memo(function HomeSection({
  title,
  titleStyles,
  children,
  containerStyles,
  disableGutters = false,
  center = false,
  maxWidth = 'lg',
  ...rest
}) {
  return (
    <StyledStack {...rest}>
      <SectionTitleJSX
        title={title}
        titleStyles={titleStyles}
      />
      <MaxWidthContainer
        maxWidth={maxWidth}
        disableStack
        disableGutters={disableGutters}
        sx={containerStyle(center, containerStyles)}
      >
        {children}
      </MaxWidthContainer>
    </StyledStack>
  );
});

function SectionTitleJSX({ title, titleStyles }) {
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
}
