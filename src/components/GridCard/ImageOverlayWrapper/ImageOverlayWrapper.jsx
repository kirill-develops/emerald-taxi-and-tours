import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import TourType from './Elements/TourType';
import Image from 'next/image';

const OverlayBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  }),
);

const commonOverlayStyles = {
  position: 'absolute',
  zIndex: 2,
  boxShadow: (theme) => theme.shadows[1],
};

const OverlayItem1 = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    ...commonOverlayStyles,
    bottom: 11,
    left: 11,
  }),
);

const OverlayItem2 = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    ...commonOverlayStyles,
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

const OverlayItem3 = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    ...commonOverlayStyles,
    bottom: 11,
    right: 11,
    height: 40,
    width: 35,
  }),
);

export default React.memo(function ImageOverlayWrapper({
  type,
  price = '',
  awards,
  children,
}) {
  return (
    <OverlayBox>
      <OverlayItem1>
        {type && (
          <TourType
            typeArr={type}
            variant="filled"
          />
        )}
      </OverlayItem1>
      {price && (
        <OverlayItem2>
          <Typography variant="smallCaption">FROM</Typography>
          <Typography variant="smallBold">${price}</Typography>
        </OverlayItem2>
      )}
      {awards?.[0]?.images?.large && (
        <OverlayItem3>
          <Image
            src={awards[0].images.large}
            alt={`TripAdvisor's ${awards[0].display_name} award`}
            fill
          />
        </OverlayItem3>
      )}
      {children}
    </OverlayBox>
  );
});
