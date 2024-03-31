import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';

export default React.memo(function TourType({
  typeArr,
  variant = 'outlined',
  sx,
  ...rest
}) {
  const stackStyles = useMemo(
    () => ({ flexWrap: 'wrap', gap: 1, ...sx }),
    [sx],
  );

  return (
    <Stack
      direction="row"
      sx={stackStyles}
      {...rest}
    >
      {typeArr.map(({ name, handleCheckboxToggle }) => (
        <Chip
          key={name}
          label={name}
          size="small"
          variant={variant}
          onDelete={handleCheckboxToggle}
          {...rest}
        />
      ))}
    </Stack>
  );
});
