import { useEffect } from 'react';

function useSearchListner(handleOpen) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.metaKey && event.key === 'k') {
        handleOpen();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOpen]);
}

export default useSearchListner;
