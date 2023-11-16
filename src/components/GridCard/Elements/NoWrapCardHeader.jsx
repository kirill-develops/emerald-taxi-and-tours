import CardHeader from '@mui/material/CardHeader';
import React from 'react';

const cardHeaderStyles = { p: 0, overflow: 'hidden' };

const getTitleTypographyProps = (noWrap, titleVariant) => ({
  noWrap,
  variant: titleVariant,
});

const getSubheaderTypographyProps = (
  noWrap,
  subheaderVariant,
  subheaderColor,
) => ({
  noWrap,
  variant: subheaderVariant,
  sx: { color: subheaderColor },
});

export default function NoWrapCardHeader({
  title,
  subheader,
  titleVariant = 'h5',
  subheaderVariant = 'caption',
  subheaderColor,
  noWrap = false,
  ...rest
}) {
  const titleTypographyProps = getTitleTypographyProps(noWrap, titleVariant);

  const subheaderTypographyProps = getSubheaderTypographyProps(
    noWrap,
    subheaderVariant,
    subheaderColor,
  );

  return (
    <CardHeader
      title={title}
      subheader={subheader}
      titleTypographyProps={titleTypographyProps}
      subheaderTypographyProps={subheaderTypographyProps}
      sx={cardHeaderStyles}
      {...rest}
    />
  );
}
