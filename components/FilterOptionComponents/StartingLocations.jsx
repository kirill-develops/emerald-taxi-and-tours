import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import { tourData } from '@data/tours';
import { extractProps, useTour } from '@state/useTour';

function StartingLocations() {
  const filteredDepartures = extractProps(tourData, 'price');
  const [state, actions] = useTour();
  const { filterStartLocation } = state;
  const { handleStartLocationCheckbox, findAvailableFilters } = actions;

  const pickupAvailable = findAvailableFilters(
    Object.values(filteredDepartures),
  );

  return (
    <FormGroup>
      {filteredDepartures.map(({ name, link }) => (
        <FormControlLabel
          label={name}
          key={link}
          control={
            <Checkbox
              size="small"
              sx={{ py: 0.5 }}
              inputProps={{ 'aria-label': name }}
              value={link}
              checked={filterStartLocation[link]}
              disabled={!pickupAvailable[link]}
              onChange={handleStartLocationCheckbox}
            />
          }
        />
      ))}
    </FormGroup>
  );
}

export default StartingLocations;
