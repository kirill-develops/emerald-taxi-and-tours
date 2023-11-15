import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';

import HomeSection from '../Elements/HomeSection';
import TransportCards from './Elements/TransportCards';

const homeSectionStyles = { pt: 5, pb: 0, rowGap: 0 };

const StyledHomeSection = React.memo(function StyledHomeSection({
  children,
  ...rest
}) {
  return (
    <HomeSection
      disableGutters
      sx={homeSectionStyles}
      {...rest}
    >
      {children}
    </HomeSection>
  );
});

const SectionStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    overflowX: 'scroll',
    width: '100%',
    pt: { xxs: 1, sm: 2.5 },
    pb: 5,
    px: { xxs: 2, sm: 3 },
    flexDirection: { xxs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    columnGap: 3,
    rowGap: 3.5,
  }),
);

export default React.memo(function FeaturedTransfer() {
  return (
    <StyledHomeSection title={'Plan Your Private Transfer'}>
      <SectionStack>
        <TransportCards />
      </SectionStack>
    </StyledHomeSection>
  );
});
