import React from 'react';
import GridCard from '@components/GridCard/';
import RankingEl from '@elements/RankingEl';

function getSubheader(areaLink, destination, area) {
  switch (areaLink) {
    case 'other':
      return destination.area;
    case 'norman_manley':
      return destination.parish;
    default:
      return area;
  }
}

export default React.memo(function TransferCard({ destinationData, areaData }) {
  const { name: areaName, link: areaLink, airportLink } = areaData;

  const {
    name,
    link,
    price,
    tripAdvisorPhotos,
    tripAdvisorReviews,
    tripAdvisorDetails: { rating, num_reviews: numReviews } = {},
  } = destinationData;

  const destinationURL = `/transfer/${airportLink}/${areaLink}/${link}#top`;

  const subheader = getSubheader(areaLink, destinationData, areaName);

  return (
    <GridCard
      price={price.oneWay}
      picData={tripAdvisorPhotos?.[0]}
      reviews={tripAdvisorReviews}
      subheader={subheader}
      subheaderVariant="cardCaption"
      title={name}
      titleVariant="cardTitle"
      url={destinationURL}
      variant="outlined"
      rankingEl={
        <RankingEl
          rating={rating}
          numReviews={numReviews}
        />
      }
    />
  );
});
