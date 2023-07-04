import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';

export default function CardTitle({
  children,
  uppercase = false,
  capitalize = false,
  ...rest
}) {
  const styles = useMemo(() => {
    const textTransform = [];
    if (uppercase) textTransform.push('uppercase');
    if (capitalize) textTransform.push('capitalize');

    return { textTransform: textTransform.join(' ') };
  }, [uppercase, capitalize]);

  return (
    <Typography
      variant="h5"
      fontWeight={700}
      sx={styles}
      {...rest}
    >
      {children}
    </Typography>
  );
}
