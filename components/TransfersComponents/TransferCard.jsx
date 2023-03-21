import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import ExpandMore from '@elements/ExpandMore';
import Link from '@material/Link';
import { GridItem } from '@elements/CustomGridEl';
import DetailedCard from '@elements/DetailedCard';

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

function TransferCard({ destinationData, areaData }) {
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
      <DetailedCard variant="outlined">
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
            <Typography variant="subtitle2">
              One Way (1-4 people):{' '}
              <Typography
                as="span"
                color="primary"
              >
                ${price.oneWay}
              </Typography>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
              Additional Passanger:{' '}
              <Typography
                as="span"
                color="primary"
              >
                ${price.extraGuestOneWay}
              </Typography>{' '}
              /Each
            </Typography>
            <Typography variant="subtitle2">
              Round Trip (1-4 people):{' '}
              <Typography
                as="span"
                color="primary"
              >
                ${price.roundTrip}
              </Typography>
            </Typography>
            <Typography variant="subtitle2">
              Additional Passanger:{' '}
              <Typography
                as="span"
                color="primary"
              >
                ${price.extraGuestTwoWay}
              </Typography>{' '}
              /Each
            </Typography>
          </CardContent>
        </Collapse>
      </DetailedCard>
    </GridItem>
  );
}

export default TransferCard;
