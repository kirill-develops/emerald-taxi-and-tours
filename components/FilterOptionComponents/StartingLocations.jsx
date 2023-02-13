import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import { tourData } from '../../data/tours';
import { useTour } from '../../state/useSort';

function extractPriceProperties(data) {
  let result = [];
  let uniqueNames = new Map();

  data.forEach(({ price }) => {
    price.forEach(({ name, link }) => {
      if (!uniqueNames.has(link)) {
        result.push({ name: name, link: link });
        uniqueNames.set(link, true);
      }
    });
  });

  result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}

function StartingLocations() {
  const filteredDepartures = extractPriceProperties(tourData);
  const [state, actions] = useTour();
  const { filterStartLocation } = state;
  const { handleStartLocationCheckbox } = actions;

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
              onChange={handleStartLocationCheckbox}
            />
          }
        />
      ))}
    </FormGroup>
  );
}

export default StartingLocations;
