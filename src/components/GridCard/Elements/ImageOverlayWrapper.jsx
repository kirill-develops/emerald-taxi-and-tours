import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React from 'react';
import TourType from '../../ToursLayout/TourGrid/AllTours/DetailedTourCard/Elements/TourType';
import { Typography } from '@mui/material';

const OverlayBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  }),
);

const OverlayItem1 = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',
    zIndex: 2,
    bottom: 11,
    left: 11,
  }),
);

const OverlayItem2 = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',
    zIndex: 2,
    top: 11,
    left: 11,
    borderRadius: 0.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.65)',
    px: 0.75,
    py: 0.5,
  }),
);

export default function ImageOverlayWrapper({ type, price = '', children }) {
  return (
    <OverlayBox>
      <OverlayItem1>
        {type && (
          <TourType
            typeArr={type}
            variant="filled"
            color="info"
            sx={{ borderRadius: 0.5 }}
          />
        )}
      </OverlayItem1>
      {price && (
        <OverlayItem2>
          <Typography variant="smallCaption">FROM</Typography>
          <Typography variant="smallBold">${price}</Typography>
        </OverlayItem2>
      )}
      {children}
    </OverlayBox>
  );
}