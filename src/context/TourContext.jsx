import { TourContainer } from '../layouts/ToursLayout/hooks/useTour';

export default function TourContext({ children }) {
  return <TourContainer isGlobal>{children}</TourContainer>;
}
