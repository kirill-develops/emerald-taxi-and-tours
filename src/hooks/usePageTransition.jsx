import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function usePageTransition() {
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setShowComponent(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setShowComponent(true);
    };

    if (router.isReady) {
      setShowComponent(true);
    } else {
      router.events.on('routeChangeComplete', handleRouteChangeComplete);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      };
    }
  }, [router]);

  return showComponent;
}

export default usePageTransition;
