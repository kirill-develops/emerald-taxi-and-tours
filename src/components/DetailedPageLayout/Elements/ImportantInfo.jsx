import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Remove from '@mui/icons-material/Remove';
import React from 'react';
import PageCard from '@elements/PageCard';
import CardTitle from '@elements/CardTitle';
import { GridItem } from '@elements/CustomGridEl';

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

export default function ImportantInfo() {
  return (
    <GridItem
      xxs={12}
      md={5}
    >
      <PageCard>
        <CardTitle>Important Info</CardTitle>
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
      </PageCard>
    </GridItem>
  );
}
