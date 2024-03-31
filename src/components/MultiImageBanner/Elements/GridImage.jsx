import { styled } from '@mui/material/styles';

import React from 'react';
import { GridItem } from '@elements/CustomGridEl';
import NextImage from '@elements/NextImage';

const GridImageItem = styled(GridItem)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    height: '100%',
    width: '100%',
  }),
);

export default React.memo(function GridImage({ picData, muiImageSizes }) {
  const {
    caption,
    images: { original: { url = picData.images.large.url } = { images: {} } },
  } = picData;

  return (
    <GridImageItem>
      <NextImage
        src={url}
        altCaption={caption}
        muiImageSizes={muiImageSizes}
      />
    </GridImageItem>
  );
});
