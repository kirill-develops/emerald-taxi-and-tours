import React from 'react';
import TransportCard from './TransportCard';

import mbjPhoto from '@../public/images/101.png';
import kinPhoto from '@../public/images/99.jpeg';
import resortPhoto from '@../public/images/negril-beach-jamaica.jpeg';

const airportTransfersLinks = [
  {
    title: 'Montego Bay Airport',
    caption: 'Direct transport to & from Montego Bay Airport',
    image: mbjPhoto,
    url: '/transfer/MBJ',
  },
  {
    title: 'Kingston Airport',
    caption: 'Direct transport to & from Kingston Airport',
    image: kinPhoto,
    url: '/transfer/KIN',
  },
  {
    title: 'Resort Transfers',
    caption: 'Direct transport between resorts',
    image: resortPhoto,
    url: '/transfer/resort',
  },
];

export default React.memo(function TransportCards() {
  return airportTransfersLinks.map(({ title, caption, url, image }) => (
    <TransportCard
      key={url}
      title={title}
      caption={caption}
      image={image}
      url={url}
    />
  ));
});
