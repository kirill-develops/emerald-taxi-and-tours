import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { darken } from '@mui/material/styles';
import React from 'react';
import { PopUpLink } from '@elements/Links';
import ButtonText from './Elements/ButtonText';

const tripAdvisorWriteReviewUrl =
  'https://www.tripadvisor.ca/UserReview-g3200052-d12214050-Emerald_Taxi_Tours-Green_Island_Hanover_Parish_Jamaica.html';

const white = (theme) => theme.palette.common.white;
const tripAdvisorGreen = darken('#159d5a', 0.225);

const buttonStyles = {
  py: 2,
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: white,
  },
};

export default function RateUs() {
  return (
    <Box sx={{ backgroundColor: tripAdvisorGreen }}>
      <Button
        LinkComponent={PopUpLink}
        href={tripAdvisorWriteReviewUrl}
        sx={buttonStyles}
        fullWidth
        color="inherit"
      >
        <ButtonText>Rate Us on TripAdvisor!</ButtonText>
      </Button>
    </Box>
  );
}
