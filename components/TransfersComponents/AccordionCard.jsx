import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { cardStyleProps } from '@material/theme';
import ExpandMore from '@elements/ExpandMore';
import { GridItem } from '@elements/CustomGridEl';

function getSubheader(linkEnding, destination, area) {
  switch (linkEnding) {
    case 'other':
      return destination.area;
    case 'norman_manley':
      return destination.parish;
    default:
      return area;
  }
}

function AccordionCard({ destination, area, linkEnding }) {
  const { name, link, price } = destination;
  const destinationURL = `${link}_${linkEnding}`;

  const subheader = getSubheader(linkEnding, destination, area);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <GridItem
      item
      xs={12}
      md={6}
      lg={4}
    >
      <Card
        variant="outlined"
        sx={cardStyleProps}
      >
        <CardHeader
          title={name}
          subheader={subheader}
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon
              color="secondary"
              fontSize="large"
            />
          </ExpandMore>
          <Button variant="contained">Book Now</Button>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography>One Way: ${price.oneWay}</Typography>
            <Typography>Round Trip: ${price.roundTrip}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </GridItem>
  );
}

export default AccordionCard;
