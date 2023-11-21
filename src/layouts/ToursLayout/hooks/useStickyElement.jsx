import { useCallback, useLayoutEffect, useRef, useState } from 'react';

export default function useStickyElement(defaultSticky = false) {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const [elTop, setElTop] = useState(null);
  const elRef = useRef(null);
  const containerRef = useRef(null);

  const toggleSticky = useCallback(
    ({ top }) => {
      if (top <= 80) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky, setIsSticky],
  );

  const toggleBottom = useCallback(
    (scrollY, containerBottom) => {
      const topValue =
        scrollY >= containerBottom ? 80 + containerBottom - scrollY : 80;

      setElTop(topValue);
    },
    [setElTop],
  );

  useLayoutEffect(() => {
    const handleScroll = () => {
      toggleSticky(elRef.current.getBoundingClientRect());

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const containerBottom = containerTop + containerHeight;

      const elHeight = elRef.current.offsetHeight;
      const elRelativeBottom = window.scrollY + elHeight + 80;

      toggleBottom(elRelativeBottom, containerBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleSticky, toggleBottom]);

  return { elRef, containerRef, isSticky, elTop };
}
