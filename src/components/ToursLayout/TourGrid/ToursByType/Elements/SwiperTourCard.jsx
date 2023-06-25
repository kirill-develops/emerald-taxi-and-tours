import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import React from 'react';
import GridCard from '@elements/GridCard';
import BookNowButton from '../../AllTours/DetailedTourCard/Elements/BookNowButton';

const cardActionsStyles = { p: 2 };

export default function SwiperTourCard({ tour }) {
  const { name, area, link, type, price, description } = tour;

  const cardContentStyles = {
    pt: 0,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  };

  return (
    <GridCard variant="elevation">
      <CardHeader
        title={name}
        subheader={area}
      />
      <CardContent sx={cardContentStyles}></CardContent>
      <Divider variant="middle" />
      {/* <Description
        description={description}
        sx={{ padding: 2 }}
        variant="caption"
      /> */}
      <CardActions
        disableSpacing
        sx={cardActionsStyles}
      >
        <BookNowButton url={link} />
      </CardActions>
    </GridCard>
  );
}
