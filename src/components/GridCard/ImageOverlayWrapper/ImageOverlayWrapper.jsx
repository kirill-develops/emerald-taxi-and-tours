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
    px: 0.75,
    py: 0.5,
    borderRadius: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 0,
    alignItems: 'center',
    boxShadow: 0,
  }),
);

const PricingCaption = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    typography: 'body1',
    fontSize: '0.7875rem',
    fontStyle: 'italic',
    fontWeight: 200,
    fontVariant: 'small-caps',
    letterSpacing: '-0.00688rem',
    lineHeight: 0.85,
    color: 'white',
  }),
);

const PricingFont = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    typography: 'body1',
    fontSize: '1.2rem',
    fontWeight: 800,
    fontVariant: 'small-caps',
    letterSpacing: '-0.02938rem',
    lineHeight: 0.85,
    color: '#ffb952',
    // WebkitTextStroke: `0.1px ${theme.palette.secondary.main}`,
  }),
);

const Elipse = styled((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="58"
    height="42"
    viewBox="0 0 58 42"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_15_3376)">
      <ellipse
        cx="29"
        cy="17"
        rx="25"
        ry="17"
        fill="#3A4C2A"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_15_3376"
        x="0"
        y="0"
        width="58"
        height="42"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodOpacity="0"
          result="BackgroundImageFix"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite
          in2="hardAlpha"
          operator="out"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_15_3376"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_15_3376"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
))(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',
    top: -1,
    zIndex: -1,
    fill: theme.palette.primary.container,
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
          <Elipse />
          <PricingCaption>FROM</PricingCaption>
          <PricingFont>${price}</PricingFont>
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
