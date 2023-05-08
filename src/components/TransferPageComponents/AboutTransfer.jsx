import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Remove from '@mui/icons-material/Remove';
import React, { useContext, useMemo, useState } from 'react';
import { ParamContext } from '@Form/FormContextProvider';

const headerStyles = { fontWeight: 700 };

const bulletPoints = [
  { primary: 'Private Transport', secondary: 'No other guests on board.' },
  {
    primary: 'No Stopping Along Route',
    secondary: 'Unless requested by passenger.',
  },
  {
    primary: 'Vehicle Type Not Gauranteed',
    secondary:
      'Vehicle types are based on availability and number of passengers.',
  },
  { primary: null, secondary: 'Travel in air conditioned comfort.' },
  { primary: null, secondary: 'Complimentary beverage included.' },
  {
    primary: null,
    secondary: 'Instructions will be sent with Confirmation Voucher.',
  },
  { primary: null, secondary: 'Last minute bookings accepted.' },
];

function AboutTransfer() {
  const { areaParams, transferParams } = useContext(ParamContext);
  const { airport, airportLink, name: areaName } = areaParams;

  const name = useMemo(
    () =>
      transferParams.name === 'All Other Resorts, Villas, AirBnB & Homes'
        ? `Accomodations in ${areaName}`
        : airportLink === 'MBJ'
        ? transferParams.name
        : `Accomodations in ${transferParams.name}`,
    [transferParams, airportLink, areaName],
  );

  return (
    <Box sx={{ paddingTop: 4 }}>
      <Typography
        variant="h4"
        sx={headerStyles}
      >
        Private Shuttle Service:
      </Typography>
      <Typography
        variant="h4"
        sx={{ ...headerStyles, paddingBottom: 4 }}
      >
        {airport} - {name}
      </Typography>
      <Typography
        variant="body1"
        paragraph
      >
        Experience the ultimate in personalized service with our private airport
        transfers from {airport}. Say goodbye to tedious stops along the way and
        hello to a direct journey to your hotel or villa in the comfort of your
        very own air-conditioned vehicle. With us, you&apos;ll enjoy a private,
        hassle-free ride that lets you fully unwind and relax as soon as you
        touch down in Jamaica. Start your trip off on the right foot with our
        premium transfer service, and make the most of your time in paradise.
      </Typography>
      <Typography
        variant="h4"
        sx={{ ...headerStyles, paddingTop: 1 }}
      >
        Important Info
      </Typography>
      <List>
        {bulletPoints.map((point, i) => (
          <ListItem
            disablePadding
            key={i}
          >
            <ListItemIcon sx={{ minWidth: '32px' }}>
              <Remove fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={point.primary}
              secondary={point.secondary}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default AboutTransfer;
