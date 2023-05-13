import { useState, useEffect } from 'react';

let isInitialLoad = true;

function useLoadingTransition(duration = 0.5) {
  const [visible, setVisible] = useState(!isInitialLoad);

  useEffect(() => {
    if (isInitialLoad) {
      isInitialLoad = false;
      setVisible(true);
    }
  }, []);

  const transitionStyle = {
    opacity: visible ? 1 : 0,
    transition: `opacity ${duration}s ease-in-out`,
  };

  return transitionStyle;
}

export default useLoadingTransition;
