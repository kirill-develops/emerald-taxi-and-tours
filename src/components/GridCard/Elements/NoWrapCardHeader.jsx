import CardHeader from '@mui/material/CardHeader';
import React, { useMemo } from 'react';

const cardHeaderStyles = { p: 0, overflow: 'hidden' };

export default function NoWrapCardHeader({
  title,
  subheader,
  titleVariant = 'h5',
  subheaderVariant = 'caption',
  subheaderColor = (theme) => theme.palette.secondary.contrastText,
  noWrap = false,
}) {
  const headerTypographyProp = useMemo(
    () => ({
      noWrap: noWrap,
    }),
    [noWrap],
  );

  const titleTypographyProps = useMemo(
    () => ({
      ...headerTypographyProp,
      variant: titleVariant,
    }),
    [titleVariant, headerTypographyProp],
  );

  const subheaderTypographyProps = useMemo(
    () => ({
      ...headerTypographyProp,
      variant: subheaderVariant,
      sx: { color: subheaderColor },
    }),
    [headerTypographyProp, subheaderVariant],
  );

  return (
    <CardHeader
      title={title}
      subheader={subheader}
      titleTypographyProps={titleTypographyProps}
      subheaderTypographyProps={subheaderTypographyProps}
      sx={cardHeaderStyles}
    />
  );
}
