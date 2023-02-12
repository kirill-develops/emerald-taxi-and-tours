import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';

function TourType({ typeArr }) {
  return (
    <Stack
      direction="row"
      sx={{ flexWrap: 'wrap', gap: 1 }}
    >
      {typeArr.map((type) => (
        <Chip
          key={type}
          label={type}
          size="small"
          variant="outlined"
        />
      ))}
    </Stack>
  );
}

export default TourType;
