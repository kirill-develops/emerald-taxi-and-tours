import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import PriceTable from './Elements/PriceTable';
import TourType from './Elements/TourType';
import PickUpCardHeader from './Elements/PickUpCardHeader';
import GridCard from '@elements/GridCard';
import BookNowButton from './Elements/BookNowButton';
import ExpandMoreButton from './Elements/ExpandMoreButton';
import { Box } from '@mui/material';
import CardImage from '../../ToursByType/SwiperTourCard.jsx/Elements/CardImage';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import { getToursUrl } from '@pages/tours/[area]/[tour]';

const cardContentStyles = {
  py: 0,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  rowGap: 1,
};

const gridItemStyles = {
  width: '100%',
  flexDirection: 'column',
};

const cardActionsStyles = { p: 2 };

function Description({ description, sx, ...rest }) {
  return (
    description.length > 0 && (
      <Typography
        sx={sx}
        {...rest}
      >
        {description}
      </Typography>
    )
  );
}

export default function DetailedTourCard({ tour, sx, ...rest }) {
  const {
    name,
    area,
    link,
    areaLink,
    type,
    price,
    description,
    tripAdvisorPhotos,
  } = tour;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  const url = getToursUrl(areaLink, link);

  return (
    <GridItem
      xxs={12}
      sx={{ ...gridItemStyles, ...sx }}
      {...rest}
    >
      <GridCard>
        <GridContainer sx={{ height: '100%' }}>
          <CardImage
            picData={tripAdvisorPhotos[0]}
            xxs={5}
            sm={4}
          />
          <GridItem
            xxs={7}
            sm={8}
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
            <CardContent sx={cardContentStyles}>
              <TourType typeArr={type} />
              <PickUpCardHeader price={price} />
              <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
              >
                <Box sx={{ ...cardContentStyles, rowGap: 2, p: 0 }}>
                  <Description description={description} />
                  <PriceTable pricesArr={price} />
                </Box>
              </Collapse>
            </CardContent>
            <Divider
              variant="middle"
              sx={{ mt: 2 }}
            />
            <CardActions
              disableSpacing
              sx={cardActionsStyles}
            >
              <BookNowButton url={url} />
              <ExpandMoreButton
                expanded={expanded}
                handleExpandClick={handleExpandClick}
              />
            </CardActions>
          </GridItem>
        </GridContainer>
      </GridCard>
    </GridItem>
  );
}
