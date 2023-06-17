import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import PageCard from '@elements/PageCard';
import RankingEl from '../Elements/RankingEl';
import FormattedRankingString from '../Elements/FormattedRankingString';
import Subratings from './Elements/Subratings';

export default React.memo(function RatingsAndReviews() {
  const {
    tourParams: {
      tripAdvisorDetails: { rating, subratings },
    },
  } = useContext(ParamContext);

  if (!subratings) {
    return null;
  }

  return (
    <PageCard>
      <Stack spacing={1}>
        <Typography variant="h6">Ratings and reviews</Typography>
        <RankingEl>
          <Typography variant="h6">{rating}</Typography>
        </RankingEl>
        <FormattedRankingString />
      </Stack>

      <Divider sx={{ my: 4 }} />
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Ratings
      </Typography>
      <Stack spacing={0.5}>
        <Subratings />
      </Stack>
    </PageCard>
  );
});
