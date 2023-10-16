import { TourContainer } from '../components/ToursLayout/hooks/useTour';

export default function TourContext({ children }) {
  return <TourContainer>{children}</TourContainer>;
}
