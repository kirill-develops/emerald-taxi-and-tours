import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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

export default function HomeSection({
  title,
  titleHighlight,
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
        titleHighlight={titleHighlight}
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
}

const StyledSectionTitle = styled((props) => (
  <SectionTitle
    maxWidth="lg"
    {...props}
  />
))(({ theme, sx }) => theme.unstable_sx({ ...sx }));

const HighlightedText = styled((props) => (
  <Typography
    component={'span'}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    typography: 'sectionTitle',
    color: theme.palette.primary.main,
  }),
);

function SectionTitleJSX({ title, titleHighlight, titleStyles }) {
  if (!title) {
    return;
  }

  const startIndex = title.indexOf(titleHighlight);

  if (startIndex === -1) {
    // If the titleHighlight is not found, return the original string
    return <StyledSectionTitle sx={titleStyles}>{title}</StyledSectionTitle>;
  }

  const [before, selected, after] = [
    title.substring(0, startIndex),
    title.substring(startIndex, startIndex + titleHighlight.length),
    title.substring(startIndex + titleHighlight.length),
  ];

  return (
    <StyledSectionTitle sx={titleStyles}>
      {before}
      <HighlightedText>{selected}</HighlightedText>
      {after}
    </StyledSectionTitle>
  );
}
