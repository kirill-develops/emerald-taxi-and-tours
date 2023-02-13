import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import { tourData } from '../../data/tours';
import { useTour } from '../../state/useSort';

function extractTypeProperties(data) {
  let result = [];
  let uniqueNames = new Map();

  data.forEach(({ type }) => {
    type.forEach((name) => {
      if (!uniqueNames.has(name)) {
        result.push(name);
        uniqueNames.set(name, true);
      }
    });
  });

  result.sort();

  return result;
}

function AtractionTypes() {
  const filteredTypes = extractTypeProperties(tourData);
  const [state, actions] = useTour();
  const { filterType } = state;
  const { handleTypeCheckbox } = actions;

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
              onChange={handleTypeCheckbox}
            />
          }
        />
      ))}
    </FormGroup>
  );
}

export default AtractionTypes;
