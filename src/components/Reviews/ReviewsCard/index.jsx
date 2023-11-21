import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import TravelerRating from './Elements/TravelerRating';
import CardTitle from '@elements/CardTitle';

const dividerStyles = { my: 1 };

const pageCardStyles = { maxWidth: 'unset' };

export default React.memo(function Reviews() {
  const { tripAdvisorDetails: { num_reviews: numReviews } = {} } =
    useContext(ParamContext);

  return (
    numReviews && (
      <PageCard sx={pageCardStyles}>
        <Stack spacing={1}>
          <CardTitle>
            Reviews{' '}
            <Typography
              as="span"
              variant="subtitle1"
              color={(theme) => theme.palette.text.secondary}
            >
              ({numReviews})
            </Typography>
          </CardTitle>
          <Box>
            <Divider sx={dividerStyles} />
          </Box>
          <TravelerRating />
        </Stack>
      </PageCard>
    )
  );
});
