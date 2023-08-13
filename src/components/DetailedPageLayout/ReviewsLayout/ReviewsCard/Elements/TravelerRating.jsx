import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import { styled } from '@mui/material';

function RatingStack({ children, ...other }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
      width={'100%'}
    >
      {children}
    </Stack>
  );
}

function RatingBar(props) {
  return (
    <LinearProgress
      sx={{
        width: '100%',
        flex: 'auto 25px',
        height: 10,
      }}
      variant="determinate"
      {...props}
    />
  );
}

const TitleText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({ flex: 1, minWidth: '75px' }),
);

const valueTextStyles = { flex: 0.5, minWidth: '35px' };

const qualityStringObj = [
  'Excellent',
  'Very good',
  'Average',
  'Poor',
  'Terrible',
];

export default function TravelerRating() {
  const {
    tripAdvisorDetails: {
      review_rating_count: ratingCountObj,
      num_reviews: numReviews,
    } = {},
  } = useContext(ParamContext);

  return (
    ratingCountObj && (
      <Stack
        direction="column"
        spacing={1}
      >
        {Object.values(ratingCountObj)
          .reverse()
          .map((value, i) => {
            const percentValue = (Number(value) / Number(numReviews)) * 100;

            return (
              <RatingStack key={`${value}${i}`}>
                <TitleText noWrap>{qualityStringObj[i]}</TitleText>
                <RatingBar value={percentValue} />
                <Typography
                  variant="caption"
                  noWrap
                  sx={valueTextStyles}
                >
                  {value}
                </Typography>
              </RatingStack>
            );
          })}
      </Stack>
    )
  );
}
