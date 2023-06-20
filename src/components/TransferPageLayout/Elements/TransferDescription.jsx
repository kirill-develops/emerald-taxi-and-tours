import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ParamContext } from '@Form/FormContextProvider';

const useLocalizedDescription = (
  airport,
) => `Experience the ultimate in personalized service with our private airport
        transfers from ${airport}. Say goodbye to tedious stops along the way and
        hello to a direct journey to your hotel or villa in the comfort of your
        very own air-conditioned vehicle. With us, you'll enjoy a private,
        hassle-free ride that lets you fully unwind and relax as soon as you
        touch down in Jamaica. Start your trip off on the right foot with our
        premium transfer service, and make the most of your time in paradise.`;

export default function TransferDescription() {
  const { areaParams: { airport } = {} } = useContext(ParamContext);

  const localizedDescription = useLocalizedDescription(airport);

  return (
    <Typography
      variant="body1"
      paragraph
    >
      {localizedDescription}
    </Typography>
  );
}
