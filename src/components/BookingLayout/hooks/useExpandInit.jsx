import { useCallback, useState } from 'react';
import usePathChangeEffect from './usePathChangeEffect';

export default function useExpandInit(setCookie, isBookingOpen) {
  const [expanded, setExpanded] = useState(Boolean(isBookingOpen));

  const initExpand = useCallback(() => {
    setExpanded(false);
    setCookie({ isBookingOpen: false });
  }, [setCookie]);

  usePathChangeEffect(initExpand);

  return [expanded, setExpanded];
}
