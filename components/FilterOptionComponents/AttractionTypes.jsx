import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import { tourData } from '../../data/tours';
import { extractProps, useTour } from '../../state/useTour';

function AtractionTypes() {
  const filteredTypes = extractProps(tourData, 'type');
  const [state, actions] = useTour();
  const { filterType } = state;
  const { handleTypeCheckbox, findAvailableFilters } = actions;

  const typeAvailable = findAvailableFilters(filteredTypes);

  return (
    <FormGroup>
      {filteredTypes.map((name) => (
        <FormControlLabel
          key={name}
          label={name}
          control={
            <Checkbox
              size="small"
              sx={{ py: 0.5 }}
              inputProps={{ 'aria-label': name }}
              value={name}
              checked={filterType[name]}
              disabled={!typeAvailable[name]}
              onChange={handleTypeCheckbox}
            />
          }
        />
      ))}
    </FormGroup>
  );
}

export default AtractionTypes;
