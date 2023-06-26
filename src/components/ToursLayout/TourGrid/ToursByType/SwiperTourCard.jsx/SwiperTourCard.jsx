import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import React from 'react';
import GridCard from '@elements/GridCard';
import BookNowButton from '../../AllTours/DetailedTourCard/Elements/BookNowButton';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import CardImage from './Elements/CardImage';

const cardActionsStyles = { p: 2 };

export default function SwiperTourCard({ tour }) {
  const { name, area, link, tripAdvisorPhotos } = tour;

  const cardContentStyles = {
    pt: 0,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  };

  return (
    <GridCard
      variant="elevation"
      sx={{ height: 200, minHeight: 'fit-content' }}
    >
      <GridContainer sx={{ height: '100%' }}>
        <CardImage
          picData={tripAdvisorPhotos[0]}
          xxs={5}
        />
        <GridItem
          xxs={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardHeader
            title={name}
            subheader={area}
          />
          <CardContent sx={cardContentStyles}></CardContent>
          <Divider variant="middle" />
          <CardActions
            disableSpacing
            sx={cardActionsStyles}
          >
            <BookNowButton url={link} />
          </CardActions>
        </GridItem>
      </GridContainer>
    </GridCard>
  );
}
