import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function usePathChangeEffect(executableFn) {
  const router = useRouter();
  const prevPathnameRef = useRef(null);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    const currentPathname = router.asPath;

    const hasPathnameChanged = determinePathnameChange(
      prevPathname,
      currentPathname,
    );

    if (hasPathnameChanged) {
      executableFn();
      setHasChanged(true);
    }

    prevPathnameRef.current = currentPathname;
  }, [router.asPath, executableFn]);

  return hasChanged;
}

function determinePathnameChange(prevPathname, currentPathname) {
  if (currentPathname?.includes('?')) {
    return (
      prevPathname &&
      prevPathname?.split('?')[0] !== currentPathname?.split('?')[0]
    );
  } else if (currentPathname?.includes('#')) {
    return (
      prevPathname &&
      prevPathname?.split('#')[0] !== currentPathname?.split('#')[0]
    );
  } else {
    return prevPathname && prevPathname !== currentPathname;
  }
}
