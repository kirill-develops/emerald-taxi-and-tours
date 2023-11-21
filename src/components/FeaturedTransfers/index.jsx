import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';
import HomeSection from '@elements/HomeSection';
import TransportCards from './Elements/TransportCards';

const StyledHomeSection = styled((props) => (
  <HomeSection
    disableGutters
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ p: 0, rowGap: { xxs: 0, sm: 0 } }));

const SectionStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    overflowX: 'scroll',
    width: '100%',
    pt: { xxs: 2, sm: 3 },
    pb: 5,
    px: { xxs: 2, sm: 3 },
    flexDirection: { xxs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    columnGap: 3,
    rowGap: 3.5,
  }),
);

export default React.memo(function FeaturedTransfer({
  title = 'Plan Your Private Transfer, Your Way',
}) {
  return (
    <StyledHomeSection title={title}>
      <SectionStack>
        <TransportCards />
      </SectionStack>
    </StyledHomeSection>
  );
});
