import Typography from '@mui/material/Typography';
import React from 'react';

function TextHighlight({ children, ...rest }) {
  return (
    <Typography
      as="span"
      color="primary"
      variant="inherit"
      {...rest}
    >
      {children}
    </Typography>
  );
}

function StyledText({ children, ...rest }) {
  return (
    <Typography
      variant="subtitle2"
      {...rest}
    >
      {children}
    </Typography>
  );
}

export default function PricingText({ price }) {
  const sections = [
    {
      title: 'One Way (1-4 people):',
      priceKey: 'oneWay',
    },
    {
      title: 'Additional Passenger:',
      priceKey: 'extraGuestOneWay',
      suffix: ' /Each',
    },
    {
      title: 'Round Trip (1-4 people):',
      priceKey: 'roundTrip',
    },
    {
      title: 'Additional Passenger:',
      priceKey: 'extraGuestTwoWay',
      suffix: ' /Each',
    },
  ];

  return sections.map(({ title, priceKey, suffix }) => (
    <StyledText
      key={priceKey}
      gutterBottom={!!suffix}
    >
      {title} <TextHighlight>${price[priceKey]}</TextHighlight>
      {suffix}
    </StyledText>
  ));
}
