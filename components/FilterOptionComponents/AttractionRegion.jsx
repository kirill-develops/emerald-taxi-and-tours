import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import { tourData } from '../../data/tours';
import { useTour } from '../../state/useSort';

function extractAreaProperties(data) {
  let result = [];
  let uniqueNames = new Map();

  data.forEach(({ area }) => {
    if (!uniqueNames.has(area)) {
      result.push(area);
      uniqueNames.set(area, true);
    }
  });

  result.sort();

  return result;
}

function AttractionRegion() {
  const filteredAreas = extractAreaProperties(tourData);
  const [state, actions] = useTour();
  const { filterArea } = state;
  const { handleAreaCheckbox } = actions;

  return (
    <FormGroup>
      {filteredAreas.map((name) => (
        <FormControlLabel
          key={name}
          label={name}
          control={
            <Checkbox
              size="small"
              sx={{ py: 0.5 }}
              inputProps={{ 'aria-label': name }}
              value={name}
              checked={filterArea[name]}
              onChange={handleAreaCheckbox}
            />
          }
        />
      ))}
    </FormGroup>
  );
}

export default AttractionRegion;
