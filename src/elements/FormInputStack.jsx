import Stack from '@mui/material/Stack';
import React from 'react';

export default React.memo(function FormInputStack({ children, sx, ...rest }) {
  return (
    <Stack
      direction={{ xxs: 'column', sm: 'row' }}
      alignItems="stretch"
      sx={{
        mt: 2,
        mb: 1,
        columnGap: 3,
        rowGap: 2,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Stack>
  );
});
