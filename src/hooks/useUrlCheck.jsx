import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function useUrlCheck(executableFn) {
  const router = useRouter();
  const prevPathnameRef = useRef(null);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    const currentPathname = router.asPath;

    if (prevPathname && prevPathname !== currentPathname) {
      executableFn();
      setHasChanged(true);
    }

    prevPathnameRef.current = currentPathname;
  }, [router.asPath, executableFn]);

  return hasChanged;
}

export default useUrlCheck;