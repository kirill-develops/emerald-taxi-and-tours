import { useMemo } from 'react';
import { useTour } from '../../../layouts/ToursLayout/hooks/useTour';

const captions = {
  Restaurant:
    'Discover culinary delights with our handpicked restaurant tours, showcasing the finest flavors and dining experiences. Indulge in a journey of taste and culture.',
  Attraction:
    'Explore captivating attractions with our curated tours. Immerse yourself in history, art, and entertainment as we guide you through must-visit destinations and hidden gems.',
  GolfCourse:
    'Tee off on unforgettable golf experiences with our expertly crafted tours. Enjoy breathtaking courses, scenic landscapes, and elevate your golfing passion to new heights.',
  ShoppingTour:
    'Embark on a shopping adventure with our tailored tours. From trendy boutiques to local markets, discover unique treasures and indulge in retail therapy with a touch of luxury.',
  Casino:
    'Roll the dice and experience the thrill of our casino tours. Uncover the excitement, entertainment, and vibrant nightlife as you explore premier gaming destinations with us.',
};

export default function useTourByTypeDataFetcher() {
  const [{ tourData }] = useTour();

  return useMemo(() => {
    const groupedData = groupTourData(tourData);
    const formattedData = formatGroupedData(groupedData);

    return formattedData;
  }, [tourData]);
}

function groupTourData(tourData) {
  return tourData.reduce((data, tour) => {
    tour.type.forEach((type) => {
      data[type] = data[type] || [];
      data[type].push(tour);
    });
    return data;
  }, {});
}

function formatGroupedData(groupedData) {
  return Object.entries(groupedData)
    .map(([type, tours]) => {
      const typeNoSpaces = type.replace(/ /g, '');
      const caption = captions[typeNoSpaces]; // Assuming captions is defined somewhere
      return { type, tours, caption };
    })
    .sort((a, b) => a.type.localeCompare(b.type));
}
