import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import ReviewContext from '@context/ReviewContext';
import RankingEl from './Elements/RankingEl';
import TravelDateAndType from './Elements/TraveDateAndType';
import TitleText from './Elements/TitleText';

export default function ReviewDetails() {
  const { title } = useContext(ReviewContext);

  return (
    <Stack rowGap={0}>
      <RankingEl />
      <TitleText>{title}</TitleText>
      <TravelDateAndType />
    </Stack>
  );
}
