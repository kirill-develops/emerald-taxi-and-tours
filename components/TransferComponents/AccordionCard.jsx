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
import Link from '@material/Link';
import { GridItem } from '@elements/CustomGridEl';

function getSubheader(areaLink, destination, area) {
  switch (areaLink) {
    case 'other':
      return destination.area;
    case 'norman_manley':
      return destination.parish;
    default:
      return area;
  }
}

function AccordionCard({ destinationData, areaData }) {
  const { name: areaName, link: areaLink, airportLink } = areaData;
  const { name, link, price } = destinationData;

  const destinationURL = `${airportLink}/${areaLink}/${link}`;

  const subheader = getSubheader(areaLink, destinationData, areaName);

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
              color="primary"
              fontSize="large"
            />
          </ExpandMore>
          <Button
            color="secondary"
            variant="contained"
            LinkComponent={Link}
            href={`/transfer/${destinationURL}`}
            sx={{ mx: 1 }}
          >
            Book Now
          </Button>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography>
              One Way:{' '}
              <Typography
                as="span"
                color="primary"
              >
                ${price.oneWay}
              </Typography>
            </Typography>
            <Typography>
              Round Trip:{' '}
              <Typography
                as="span"
                color="primary"
              >
                ${price.roundTrip}
              </Typography>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </GridItem>
  );
}

export default AccordionCard;
