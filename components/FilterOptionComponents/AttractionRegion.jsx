import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import { tourData } from '../../data/tours';
import { extractProps, useTour } from '../../state/useTour';

function AttractionRegion() {
  const filteredAreas = extractProps(tourData, 'area');
  const [state, actions] = useTour();
  const { filterArea } = state;
  const { handleAreaCheckbox, findAvailableFilters } = actions;

  const areaAvailable = findAvailableFilters(filteredAreas);

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
              disabled={!areaAvailable[name]}
              onChange={handleAreaCheckbox}
            />
          }
        />
      ))}
    </FormGroup>
  );
}

export default AttractionRegion;
