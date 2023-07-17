import CardHeader from '@mui/material/CardHeader';
import React, { useMemo } from 'react';

const cardHeaderStyles = { p: 0, overflow: 'hidden' };

export default function NoWrapCardHeader({ title, subheader, noWrap = false }) {
  const headerTypographyProp = useMemo(
    () => ({
      noWrap: noWrap,
    }),
    [noWrap],
  );

  return (
    <CardHeader
      title={title}
      subheader={subheader}
      titleTypographyProps={headerTypographyProp}
      subheaderTypographyProps={headerTypographyProp}
      sx={cardHeaderStyles}
    />
  );
}
