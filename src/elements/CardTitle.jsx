import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';

export default function CardTitle({
  children,
  variant = 'h5',
  uppercase = false,
  capitalize = false,
  sx,
  ...rest
}) {
  const styles = useMemo(() => {
    const textTransform = [];
    if (uppercase) textTransform.push('uppercase');
    if (capitalize) textTransform.push('capitalize');

    return { textTransform: textTransform.join(' '), ...sx };
  }, [uppercase, capitalize]);

  return (
    <Typography
      variant={variant}
      fontWeight={700}
      sx={styles}
      {...rest}
    >
      {children}
    </Typography>
  );
}
