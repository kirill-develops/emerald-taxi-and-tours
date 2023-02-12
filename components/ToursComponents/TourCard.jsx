import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { cardStyleProps } from '../../material/theme';
import ExpandMore from '../ExpandMore';
import PriceTable from './PriceTable';
import TourType from './TourType';

const gridItemProps = { xs: 12, md: 6, lg: 4, item: true };

function TourCard({ tour }) {
  const { name, area, link, type, price } = tour;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid {...gridItemProps}>
      <Card
        variant="outlined"
        sx={cardStyleProps}
      >
        <CardHeader
          title={name}
          subheader={area}
        />
        <CardContent>
          <TourType typeArr={type} />
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Button variant="contained">Book Now</Button>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <PriceTable pricesArr={price} />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default TourCard;
