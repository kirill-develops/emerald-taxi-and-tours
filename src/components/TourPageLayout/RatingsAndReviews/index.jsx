import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import RankingEl from '../Elements/RankingEl';
import FormattedRankingString from '../Elements/FormattedRankingString';
import { ParamContext } from '@Form/FormContextProvider';
import PageCard from '@elements/PageCard';
import { Rating, Stack } from '@mui/material';

export function Subratings() {
  const {
    tourParams: {
      tripAdvisorDetails: { subratings },
    },
  } = useContext(ParamContext);

  return Object.values(subratings).map(({ localized_name: name, value }) => (
    <Stack
      direction="row"
      justifyContent="space-between"
      key={name}
    >
      <Typography variant="subtitle2">{name}</Typography>
      <Rating
        defaultValue={Number(value)}
        precision={0.1}
        size="small"
        readOnly
      />
    </Stack>
  ));
}

export default function RatingsAndReviews() {
  const {
    tourParams: {
      tripAdvisorDetails: { rating, subratings },
    },
  } = useContext(ParamContext);

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
}
