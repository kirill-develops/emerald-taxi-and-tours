import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import TourType from './Elements/TourType';

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
    borderRadius: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'silver',
    backgroundColor: 'rgba(0,0,0,0.65)',
    px: 0.75,
    py: 0.5,
  }),
);

const tourTypeStyles = {
  borderRadius: 0.5,
  backgroundColor: (theme) => theme.palette.tertiary.container,
  color: (theme) => theme.palette.tertiary.containerText,
};

export default React.memo(function ImageOverlayWrapper({
  type,
  price = '',
  children,
}) {
  return (
    <OverlayBox>
      <OverlayItem1>
        {type && (
          <TourType
            typeArr={type}
            variant="filled"
            color="tertiary"
            sx={tourTypeStyles}
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
});
