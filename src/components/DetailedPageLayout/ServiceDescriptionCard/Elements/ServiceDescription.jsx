import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ParamContext } from '@Form/FormContextProvider';

const useLocalizedDescription = (airport) =>
  airport === 'tour'
    ? `Experience the ultimate in personalized service with our private island tours. Discover the hidden gems and breathtaking beauty of Jamaica with our exclusive tours tailored to your preferences. Leave the crowds behind and embark on a journey of exploration and adventure, accompanied by our knowledgeable guides. Whether you want to visit pristine beaches, explore historic landmarks, or immerse yourself in the local culture, our private island tours offer a seamless and unforgettable experience. Sit back, relax, and let us take care of all the details while you create lasting memories in this tropical paradise.`
    : `Experience the ultimate in personalized service with our private airport
        transfers from ${airport}. Say goodbye to tedious stops along the way and
        hello to a direct journey to your hotel or villa in the comfort of your
        very own air-conditioned vehicle. With us, you'll enjoy a private,
        hassle-free ride that lets you fully unwind and relax as soon as you
        touch down in Jamaica. Start your trip off on the right foot with our
        premium transfer service, and make the most of your time in paradise.`;

export default function ServiceDescription() {
  const { area: { airport } = {}, type } = useContext(ParamContext);

  let localizedDescription;

  if (type === 'tour') {
    localizedDescription = useLocalizedDescription(type);
  } else {
    localizedDescription = useLocalizedDescription(airport);
  }

  return (
    <Typography
      variant="body1"
      paragraph
    >
      {localizedDescription}
    </Typography>
  );
}
