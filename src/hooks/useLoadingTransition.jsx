import { useState, useEffect } from 'react';

function useLoadingTransition(duration = 0.5) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const transitionStyle = {
    opacity: visible ? 1 : 0,
    transition: `opacity ${duration}s ease-in-out`,
  };

  return transitionStyle;
}

export default useLoadingTransition;
