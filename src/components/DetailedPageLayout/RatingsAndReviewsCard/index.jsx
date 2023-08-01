import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import RankingEl from '../Elements/RankingWrapper';
import FormattedRankingString from '../Elements/FormattedRankingString';
import Subratings from './Elements/Subratings';
import { GridItem } from '@elements/CustomGridEl';
import CardTitle from '@elements/CardTitle';

export default React.memo(function RatingsAndReviews() {
  const { tripAdvisorDetails: { rating, subratings } = {} } =
    useContext(ParamContext);

  if (!subratings) {
    return null;
  }

  return (
    <GridItem md={5}>
      <PageCard>
        <Stack spacing={0.5}>
          <CardTitle>Ratings and reviews</CardTitle>
          <RankingEl>
            <Typography variant="h6">{rating}</Typography>
          </RankingEl>
          <FormattedRankingString />
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography
          variant="subtitle1"
          fontWeight={500}
          gutterBottom
        >
          Ratings
        </Typography>
        <Stack spacing={0.5}>
          <Subratings />
        </Stack>
      </PageCard>
    </GridItem>
  );
});
