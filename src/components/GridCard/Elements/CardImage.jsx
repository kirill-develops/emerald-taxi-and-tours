import { useTheme } from '@mui/material/styles';

import React from 'react';
import NextImage from '@elements/NextImage';

export default function CardImage({ picData, ...rest }) {
  const {
    breakpoints: { values: breakpoints },
  } = useTheme();

  if (!picData) {
    return null;
  }
  const {
    caption,
    images: { original: { url = picData.images.large.url } = { images: {} } },
  } = picData;

  const muiImageSizes = `
    (max-width: ${breakpoints.sm}) 50vw, 
    45vw`;

  return (
    <NextImage
      src={url}
      altCaption={caption}
      muiImageSizes={muiImageSizes}
      {...rest}
    />
  );
}
