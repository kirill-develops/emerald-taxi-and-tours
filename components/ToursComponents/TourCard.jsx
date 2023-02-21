import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { cardStyleProps } from '@material/theme';
import ExpandMore from '../ExpandMore';
import PriceTable from './PriceTable';
import TourType from './TourType';
import PickUpCardHeader from './PickUpCardHeader';

const gridItemProps = { xs: 12, item: true };

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
    <Grid {...gridItemProps}>
      <Card
        variant="outlined"
        sx={cardStyleProps}
      >
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
            href={`../tours/${link}`}
          >
            Book Now
          </Button>
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
      </Card>
    </Grid>
  );
}

export default TourCard;
