import Chip from '@mui/material/Chip';
import React from 'react';

const tourTypeStyles = (theme) => ({
  borderRadius: 0.5,
  backgroundColor: theme.palette.tertiary.container,
  color: theme.palette.tertiary.containerText,
});

export default React.memo(function TourType({
  typeArr,
  variant = 'outlined',
  ...rest
}) {
  return typeArr.map((type) => (
    <Chip
      key={type}
      label={type}
      size="small"
      variant={variant}
      sx={tourTypeStyles}
      {...rest}
    />
  ));
});
