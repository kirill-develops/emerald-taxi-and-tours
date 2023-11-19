import CardHeader from '@mui/material/CardHeader';
import React from 'react';

const cardHeaderStyles = { p: 0, overflow: 'hidden' };

const getTitleTypographyProps = (noWrap, titleVariant, titleColor) => ({
  noWrap,
  variant: titleVariant,
  sx: { color: titleColor },
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
  titleVariant = 'h5',
  titleColor,
  subheader,
  subheaderVariant = 'caption',
  subheaderColor,
  noWrap = false,
  ...rest
}) {
  const titleTypographyProps = getTitleTypographyProps(
    noWrap,
    titleVariant,
    titleColor,
  );

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
