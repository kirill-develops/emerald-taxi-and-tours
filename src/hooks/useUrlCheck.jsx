import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

function useUrlCheck(executableFn) {
  const router = useRouter();
  const prevPathnameRef = useRef(null);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    const currentPathname = router.asPath;

    if (prevPathname && prevPathname !== currentPathname) {
      executableFn();
    }

    prevPathnameRef.current = currentPathname;
  }, [router.asPath, executableFn]);
}

export default useUrlCheck;
