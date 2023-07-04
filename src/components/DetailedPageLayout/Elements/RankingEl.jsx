import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import { detailTypographyProps } from '../DetailsWrapper';

const RankingStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ alignItems: 'center' }),
);

export default React.memo(function RankingEl({ children }) {
  const {
    tripAdvisorDetails: { rating, num_reviews: numReviews },
  } = useContext(ParamContext);

  return (
    <RankingStack
      direction="row"
      spacing={0.5}
    >
      {children}
      <Rating
        defaultValue={Number(rating)}
        precision={0.1}
        size="small"
        readOnly
      />
      <Typography
        {...detailTypographyProps}
        fontWeight={500}
        noWrap
      >
        {numReviews && `${numReviews} reviews`}
      </Typography>
    </RankingStack>
  );
});
