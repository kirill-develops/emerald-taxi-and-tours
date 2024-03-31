import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Remove from '@mui/icons-material/Remove';
import React from 'react';
import PageCard from '@elements/PageCard';
import CardTitle from '@elements/CardTitle';

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

const dividerStyles = { mt: 2, mb: 1 };

const pageCardStyles = { minWidth: 320 };

const listIconStyles = { minWidth: '28px' };

const removeStyles = { fontSize: '1.2rem' };

export default React.memo(function ImportantInfo() {
  return (
    <PageCard sx={pageCardStyles}>
      <CardTitle>Important Info</CardTitle>
      <Divider sx={dividerStyles} />

      <List>
        {bulletPoints.map((point, i) => (
          <ListItem
            disablePadding
            dense
            key={i}
          >
            <ListItemIcon sx={listIconStyles}>
              <Remove sx={removeStyles} />
            </ListItemIcon>
            <ListItemText
              primary={point.primary}
              secondary={point.secondary}
            />
          </ListItem>
        ))}
      </List>
    </PageCard>
  );
});
