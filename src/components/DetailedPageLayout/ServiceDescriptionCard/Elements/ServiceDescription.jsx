import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';

const getLocalizedDescription = (airport, type) =>
  type === 'tour'
    ? `Discover the hidden gems and breathtaking beauty of Jamaica with our exclusive private island tours. Tailored to your preferences, these tours offer the ultimate in personalized service. Leave the crowds behind and embark on a journey of exploration and adventure, accompanied by our knowledgeable guides. From pristine beaches to historic landmarks and immersive cultural experiences, our tours cover it all. Sit back, relax, and let us handle all the details while you create lasting memories in this tropical paradise.`
    : `Experience the ultimate in personalized service with our private airport
        transfers from ${airport}. Say goodbye to tedious stops along the way and
        hello to a direct journey to your hotel or villa in the comfort of your
        very own air-conditioned vehicle. With us, you'll enjoy a private,
        hassle-free ride that lets you fully unwind and relax as soon as you
        touch down in Jamaica. Start your trip off on the right foot with our
        premium transfer service, and make the most of your time in paradise.`;

export default function ServiceDescription() {
  const { area: { airport } = {}, type } = useContext(ParamContext);

  const localizedDescription = getLocalizedDescription(airport, type);

  return <Typography variant="body1">{localizedDescription}</Typography>;
}
