import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import MaxWidthContainer from '@elements/MaxWidthContainer';

const StyledPageCard = styled(Card)(({ theme, sx }) => {
  return theme.unstable_sx({
    width: '100%',
    py: { xxs: 2, md: 3 },
    borderRadius: 0,
    borderLeft: { xxs: 'none', md: `1px solid ${theme.palette.divider}` },
    borderRight: { xxs: 'none', md: `1px solid ${theme.palette.divider}` },
    ...sx,
  });
});

export default React.memo(function PageCard({ children, ...rest }) {
  return (
    <StyledPageCard
      variant="outlined"
      {...rest}
    >
      <MaxWidthContainer>{children}</MaxWidthContainer>
    </StyledPageCard>
  );
});
