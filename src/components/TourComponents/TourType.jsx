import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';

const stackStyles = { flexWrap: 'wrap', gap: 1 };

function TourType({ typeArr }) {
  return (
    <Stack
      direction="row"
      sx={stackStyles}
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

export default React.memo(TourType);
