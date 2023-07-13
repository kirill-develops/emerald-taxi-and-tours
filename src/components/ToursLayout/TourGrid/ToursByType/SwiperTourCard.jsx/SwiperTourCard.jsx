import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import React from 'react';
import GridCard from '@elements/GridCard';
import BookNowButton from '../../AllTours/DetailedTourCard/Elements/BookNowButton';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import CardImage from './Elements/CardImage';
import { getToursUrl } from '@pages/tours/[area]/[tour]';

const cardActionsStyles = { p: 2 };

export default function SwiperTourCard({ tour }) {
  const { name, area, link, areaLink, tripAdvisorPhotos } = tour;

  const url = getToursUrl(areaLink, link);

  return (
    <GridCard sx={{ height: 150 }}>
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
          <Divider variant="middle" />
          <CardActions
            disableSpacing
            sx={cardActionsStyles}
          >
            <BookNowButton url={url} />
          </CardActions>
        </GridItem>
      </GridContainer>
    </GridCard>
  );
}
