import { TourContainer } from '../components/ToursLayout/hooks/useTour';

export default function TourContext({ children }) {
  return <TourContainer isGlobal>{children}</TourContainer>;
}
