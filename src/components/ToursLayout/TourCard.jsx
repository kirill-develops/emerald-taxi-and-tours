import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
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
import PriceTable from './PriceTable';
import TourType from './TourType';
import PickUpCardHeader from './PickUpCardHeader';
import { GridItem } from '@elements/CustomGridEl';
import Link from '@material/Link';
import DetailedCard from '@elements/DetailedCard';

const cardContentStyles = {
  pt: 0,
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
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

function TourCard({ tour, cardType = false }) {
  const { name, area, link, type, price, description } = tour;

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return cardType === false ? (
    <GridItem xs={12}>
      <DetailedCard variant="elevation">
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
          <Button
            variant="contained"
            color="secondary"
            LinkComponent={Link}
            href={`/tours/${link}`}
          >
            Book Now
          </Button>
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
      </DetailedCard>
    </GridItem>
  ) : (
    <DetailedCard variant="elevation">
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
        <Button
          variant="contained"
          color="secondary"
          LinkComponent={Link}
          href={`/tours/${link}`}
        >
          Book Now
        </Button>
      </CardActions>
    </DetailedCard>
  );
}

export default React.memo(TourCard);
