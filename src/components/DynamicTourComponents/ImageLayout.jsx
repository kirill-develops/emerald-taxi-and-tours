import { styled, useTheme } from '@mui/material/styles';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import { useMediaQuery } from '@mui/material';

const MuiImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
}));

const gridItemStyles = {
  position: 'relative',
  width: { xs: '32.9%', sm: '24.7%', md: '19.7%' },
  aspectRatio: '1 / 1',
};

function GridImage({ picData, breakpoints }) {
  const {
    id,
    caption,
    images: { original: { url = photoData.images.large } = { images: {} } },
  } = picData;

  const muiImageSizes = `(max-width: ${breakpoints.sm}) 30dvw, (max-width: ${breakpoints.md}) 25dvw, 50dvw`;

  return (
    <GridItem sx={gridItemStyles}>
      <MuiImage
        src={url}
        alt={caption}
        quality={100}
        sizes={muiImageSizes}
        fill
      />
    </GridItem>
  );
}

function GridImages({ photos }) {
  const { breakpoints } = useTheme();

  const isXsBreakpoint = useMediaQuery(breakpoints.only('xs')) && 3;
  const isSmBreakpoint = useMediaQuery(breakpoints.only('sm')) && 4;
  const isMdBreakpoint = useMediaQuery(breakpoints.up('md')) && 5;

  const breakpointImageLength = useMemo(
    () => isXsBreakpoint || isSmBreakpoint || isMdBreakpoint,
    [isXsBreakpoint, isSmBreakpoint, isMdBreakpoint],
  );

  return useMemo(
    () =>
      photos
        .slice(0, breakpointImageLength || photos.length - 1)
        .map((picData) => (
          <GridImage
            picData={picData}
            key={picData.id}
            breakpoints={breakpoints.values}
          />
        )),
    [breakpoints, photos, breakpointImageLength],
  );
}

function ImageLayout({ photos }) {
  return useMemo(
    () => (
      <GridContainer
        sx={{
          height: { xs: '18dvh', md: '25dvh' },
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
        }}
      >
        <GridImages photos={photos} />
      </GridContainer>
    ),
    [photos],
  );
}

export default ImageLayout;
