import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import DetailDevider from './Elements/DetailDevider';
import RankingEl from '../Elements/RankingWrapper';
import FormattedRankingString from '../Elements/FormattedRankingString';
import PriceAndCategory from './Elements/PriceAndCategory';
import LinksLaptop from './Elements/LinksLaptop';
import LinksMobile from './Elements/LinksMobile';

export const detailTypographyProps = { variant: 'body2' };

const DetailsBox = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ py: { xxs: 1.5, sm: 2, md: 3 }, rowGap: 2 }),
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
      <MaxWidthContainer
        rowGap={0.5}
        maxWidth="lg"
      >
        <DetailsStack>
          <RankingEl />
          {!isSmBreakpoint && <FormattedRankingString />}
          <PriceAndCategory />
        </DetailsStack>
        {!isSmBreakpoint && <LinksLaptop />}
      </MaxWidthContainer>
      {children}
      {isSmBreakpoint && <LinksMobile />}
    </DetailsBox>
  );
});
