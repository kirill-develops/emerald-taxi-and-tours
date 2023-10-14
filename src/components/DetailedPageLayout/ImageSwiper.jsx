import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';
import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';

import '@splidejs/react-splide/css/core';
import useSwiperBreakpoints from './useSwiperBreakpoints';

const ImageSwiperEl = styled(Splide)(({ theme }) =>
  theme.unstable_sx({ marginTop: 1.5 }),
);

const ImageSwiperOptions = {
  pagination: false,
  lazyLoad: 'nearby',
  perPage: 1,
  perMove: 1,
  type: 'slide',
  gap: 10,
  padding: 0,
};

const ImageSwiperTrack = styled(SplideTrack)(({ theme }) =>
  theme
    .unstable_sx
    // { paddingX: `${theme.spacing(3)} !important` }
    (),
);

const ImageSwiperSlide = styled(SplideSlide)(({ theme }) =>
  theme.unstable_sx({
    height: { xxs: '33dvh', md: '45dvh' },
    maxHeight: 'fit-content',
  }),
);

const iconButtonStyles = (position) => ({
  zIndex: 1,
  position: 'absolute',
  top: '50%',
  padding: 0.5,
  [position]: 3,
  fontSize: 15,
  backdropFilter: 'brightness(50%)',
});

const MuiImage = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
}));

function ImageSwiperSlides({ photos }) {
  const {
    breakpoints: { values: breakpoints },
  } = useTheme();

  return useMemo(
    () =>
      photos.map((photoData) => {
        const {
          id,
          caption,
          images: { original: { url } = photoData.images.large } = {
            images: {},
          },
        } = photoData;

        return (
          <ImageSwiperSlide key={id}>
            <MuiImage
              src={url}
              alt={caption}
              quality={100}
              sizes={`(max-width: ${breakpoints.sm}) 100dvw, (max-width: ${breakpoints.lg}) 66dvw, 50dvw`}
              fill
            />
          </ImageSwiperSlide>
        );
      }),
    [photos, breakpoints],
  );
}

function ImageSwiper({ photos }) {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSplidePosition = useCallback((splide) => {
    setIsStart(splide.index === 0);
    setIsEnd(splide.index === splide.length - 1);
  }, []);

  return (
    <ImageSwiperEl
      aria-label="Image Carousel"
      hasTrack={false}
      options={{ ...ImageSwiperOptions, breakpoints: breakpoints }}
      onActive={handleSplidePosition}
    >
      <Box className="splide__arrows">
        <IconButton
          className="splide__arrow splide__arrow--prev"
          sx={iconButtonStyles('left')}
          disabled={isStart}
        >
          <NavigateBefore color={isStart ? 'disabled' : 'primary'} />
        </IconButton>
        <IconButton
          className="splide__arrow splide__arrow--next"
          sx={iconButtonStyles('right')}
          disabled={isEnd}
        >
          <NavigateNext color={isEnd ? 'disabled' : 'primary'} />
        </IconButton>
      </Box>
      <ImageSwiperTrack>
        <ImageSwiperSlides photos={photos} />
      </ImageSwiperTrack>
    </ImageSwiperEl>
  );
}

export default React.memo(ImageSwiper);
