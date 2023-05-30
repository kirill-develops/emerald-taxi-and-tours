import React, { useContext, useMemo } from 'react';
import BookingLayout from '@components/BookingLayout';
import { ParamContext } from '@Form/FormContextProvider';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MuiImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
  transition: 'object-fit 5s ease',
  '&:hover': { objectFit: 'contain', cursor: 'pointer' },
}));

function DynamicTourLayout() {
  const { tourParams } = useContext(ParamContext);
  const {
    tripAdvisorDetails: details,
    tripAdvisorPhotos: photos,
    tripAdvisorReviews: reviews,
  } = tourParams;

  const imageJSX = useMemo(
    () =>
      photos.map((photoData) => {
        const {
          id,
          caption,
          images: {
            original: { height, width, url } = photoData.images.large,
          } = {
            images: {},
          },
        } = photoData;

        return (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '50vh',
            }}
            key={id}
          >
            <MuiImage
              src={url}
              alt={caption}
              quality={100}
              fill
            />
          </Box>
        );
      }),
    [photos],
  );

  return (
    <>
      {imageJSX}
      <BookingLayout />
    </>
  );
}

export default React.memo(DynamicTourLayout);
