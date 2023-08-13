import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';

export default React.memo(function TourType({
  typeArr,
  variant = 'outlined',
  sx,
  ...rest
}) {
  return typeArr.map((type) => (
    <Chip
      key={type}
      label={type}
      size="small"
      variant={variant}
      sx={sx}
      {...rest}
    />
  ));
});
