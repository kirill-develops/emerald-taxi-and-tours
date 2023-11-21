import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import RankingEl from '@elements/RankingWrapper';
import FormattedRankingString from '@elements/FormattedRankingString';
import Subratings from './Elements/Subratings';
import CardTitle from '@elements/CardTitle';

const dividerStyles = { my: 2 };

export default React.memo(function RatingsAndReviews({ sx }) {
  const { tripAdvisorDetails: { rating, subratings } = {} } =
    useContext(ParamContext);

  if (!subratings) {
    return null;
  }

  return (
    <PageCard sx={sx}>
      <CardTitle>Ratings and reviews</CardTitle>
      <Stack
        spacing={0.2}
        maxWidth="fit-content"
      >
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
