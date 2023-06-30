import { tourStore } from '../components/ToursLayout/hooks/useTour';
import { createContainer } from 'react-sweet-state';

export default function TourContext({ children }) {
  const TourContainer = createContainer(tourStore);

  return <TourContainer>{children}</TourContainer>;
}
