import Typography from '@mui/material/Typography';
import { darken } from '@mui/material/styles';
import React from 'react';
import { PopUpLink } from '@elements/Links';
import HomeSection from './HomeSection';
import { CardActionArea } from '@mui/material';

const tripAdvisorWriteReviewUrl =
  'https://www.tripadvisor.ca/UserReview-g3200052-d12214050-Emerald_Taxi_Tours-Green_Island_Hanover_Parish_Jamaica.html';

const sectionStyles = {
  backgroundColor: darken('#159d5a', 0.225),
  py: 2,
};

const actionAreaStyles = { '&:hover': { textDecoration: 'underline' } };

export default function RateUs() {
  return (
    <CardActionArea
      LinkComponent={PopUpLink}
      href={tripAdvisorWriteReviewUrl}
      sx={actionAreaStyles}
    >
      <HomeSection
        center
        sx={sectionStyles}
      >
        <Typography
          variant="h4"
          fontWeight={700}
        >
          Rate Us on TripAdvisor!
        </Typography>
      </HomeSection>
    </CardActionArea>
  );
}
