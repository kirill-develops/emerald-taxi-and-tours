import { Container, Stack, styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import DetailDevider from './Elements/DetailDevider';
import RankingEl from '../Elements/RankingEl';
import FormattedRankingString from '../Elements/FormattedRankingString';
import PriceAndCategory from './Elements/PriceAndCategory';
import LinksLaptop from './Elements/LinksLaptop';

export const detailTypographyProps = { variant: 'body2' };

const DetailsBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({ py: { xxs: 1.5, sm: 2, md: 3 } }),
);

function DetailsStack({ children, ...rest }) {
  const isSmBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Stack
      direction={isSmBreakpoint ? 'column' : 'row'}
      spacing={isSmBreakpoint ? 0.5 : 1}
      divider={!isSmBreakpoint && <DetailDevider />}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default React.memo(function DetailsWrapper({ children, ...rest }) {
  const isSmBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <DetailsBox {...rest}>
      <Container>
        <DetailsStack>
          <RankingEl />
          {!isSmBreakpoint && <FormattedRankingString />}
          <PriceAndCategory />
        </DetailsStack>
        {!isSmBreakpoint && <LinksLaptop />}
      </Container>
      {children}
    </DetailsBox>
  );
});
