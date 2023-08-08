import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { useMediaQuery } from '@mui/material';

const StyledPageCard = styled(Card)(({ theme, sx }) => {
  const isBelowMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.down('md'),
  );

  return theme.unstable_sx({
    width: '100%',
    minWidth: 'fit-content',
    maxWidth: isBelowMdBreakpoint ? 'unset' : 'fit-content',
    flexGrow: 1,
    py: { xxs: 2, md: 3 },
    borderRadius: 0,
    borderLeft: { xxs: 'none', md: `1px solid ${theme.palette.divider}` },
    borderRight: { xxs: 'none', md: `1px solid ${theme.palette.divider}` },
    ...sx,
  });
});

export default React.memo(function PageCard({
  children,
  disableStack = false,
  maxWidth,
  ...rest
}) {
  return (
    <StyledPageCard
      variant="outlined"
      {...rest}
    >
      <MaxWidthContainer
        rowGap={0}
        disableStack={disableStack}
        maxWidth={maxWidth}
      >
        {children}
      </MaxWidthContainer>
    </StyledPageCard>
  );
});
