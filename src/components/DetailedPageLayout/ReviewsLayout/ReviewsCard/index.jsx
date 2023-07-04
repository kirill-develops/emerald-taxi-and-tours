import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import PageCard from '@elements/PageCard';
import TravelerRating from './Elements/TravelerRating';

export default function Reviews() {
  const {
    tripAdvisorDetails: { num_reviews: numReviews },
  } = useContext(ParamContext);

  return (
    <PageCard>
      <Stack spacing={1}>
        <Typography variant="h6">
          Reviews{' '}
          <Typography
            as="span"
            variant="subtitle1"
            color={(theme) => theme.palette.text.secondary}
          >
            ({numReviews})
          </Typography>
        </Typography>
        <Divider sx={{ my: 4 }} />
        <TravelerRating />
      </Stack>
    </PageCard>
  );
}
