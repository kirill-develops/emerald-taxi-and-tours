import Typography from '@mui/material/Typography';
import React from 'react';

const white = (theme) => theme.palette.common.white;

const textStyles = { color: white };

export default React.memo(function ButtonText({ children, sx, ...rest }) {
  const dynamicStyles = { ...textStyles, ...sx };

  return (
    <Typography
      variant="h4"
      fontWeight={700}
      sx={dynamicStyles}
      {...rest}
    >
      {children}
    </Typography>
  );
});
