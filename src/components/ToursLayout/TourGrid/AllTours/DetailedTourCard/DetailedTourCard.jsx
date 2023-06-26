import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import React, { useState } from 'react';
import ExpandMore from '@elements/ExpandMore';
import PriceTable from './Elements/PriceTable';
import TourType from './Elements/TourType';
import PickUpCardHeader from './Elements/PickUpCardHeader';
import { GridItem } from '@elements/CustomGridEl';
import GridCard from '@elements/GridCard';
import BookNowButton from './Elements/BookNowButton';

const cardContentStyles = {
  pt: 0,
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
};

const gridItemStyles = {
  width: '100%',
  flexDirection: 'column',
  marginBottom: 2,
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

export default function DetailedTourCard({ tour, cardType = false }) {
  const { name, area, link, type, price, description } = tour;

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <GridItem
      xxs={12}
      sx={gridItemStyles}
    >
      <GridCard>
        <CardHeader
          title={name}
          subheader={area}
        />
        <CardContent sx={cardContentStyles}>
          <TourType typeArr={type} />
          <PickUpCardHeader price={price} />
        </CardContent>
        <Divider variant="middle" />
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Description description={description} />
            <PriceTable pricesArr={price} />
          </CardContent>
        </Collapse>
        <CardActions
          disableSpacing
          sx={cardActionsStyles}
        >
          <BookNowButton url={link} />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Tooltip
              title={expanded ? '' : 'click for more'}
              arrow
              TransitionComponent={Zoom}
            >
              <ExpandMoreIcon
                color="primary"
                fontSize="large"
              />
            </Tooltip>
          </ExpandMore>
        </CardActions>
      </GridCard>
    </GridItem>
  );
}
