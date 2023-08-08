import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import RankingEl from '../Elements/RankingWrapper';
import FormattedRankingString from '../Elements/FormattedRankingString';
import Subratings from './Elements/Subratings';
import CardTitle from '@elements/CardTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';

const pageCardStyles = (theme, isBreakpoint) => ({
  maxWidth: isBreakpoint ? 'fit-content' : 'unset',
});

const dividerStyles = { my: 2 };

export default React.memo(function RatingsAndReviews() {
  const { tripAdvisorDetails: { rating, subratings } = {} } =
    useContext(ParamContext);

  const isMinMdBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.up('md'),
  );

  if (!subratings) {
    return null;
  }

  return (
    <PageCard sx={(theme) => pageCardStyles(theme, isMinMdBreakpoint)}>
      <CardTitle>Ratings and reviews</CardTitle>
      <Stack spacing={0.2}>
        <RankingEl>
          <Typography variant="subtitle1">{rating}</Typography>
        </RankingEl>
        <FormattedRankingString />
        <Box>
          <Divider sx={dividerStyles} />
        </Box>
        <Typography variant="cardTitle">Ratings</Typography>

        <Subratings />
      </Stack>
    </PageCard>
  );
});
