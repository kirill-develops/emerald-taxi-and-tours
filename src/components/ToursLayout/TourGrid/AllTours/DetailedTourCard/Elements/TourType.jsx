import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';

const stackStyles = { flexWrap: 'wrap', gap: 1 };

function TourType({ typeArr, variant = 'outlined', ...rest }) {
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
          variant={variant}
          {...rest}
        />
      ))}
    </Stack>
  );
}

export default React.memo(TourType);
