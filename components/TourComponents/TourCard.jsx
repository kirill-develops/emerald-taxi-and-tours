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

function Description({ description }) {
  return description.length > 0 && <Typography>{description}</Typography>;
}

function TourCard({ tour }) {
  const { name, area, link, type, price, description } = tour;

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <GridItem xs={12}>
      <DetailedCard variant="elevation">
        <CardHeader
          title={name}
          subheader={area}
        />
        <CardContent
          sx={{
            pt: 0,
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
          }}
        >
          <TourType typeArr={type} />
          <PickUpCardHeader price={price} />
        </CardContent>
        <Divider variant="middle" />
        <CardActions
          disableSpacing
          sx={{ p: 2 }}
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
              title="click for more"
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
      </DetailedCard>
    </GridItem>
  );
}

export default TourCard;
