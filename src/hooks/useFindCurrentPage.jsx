import { useRouter } from 'next/router';
import { useMemo } from 'react';

export default function useFindCurrentPage(pages) {
  const currentPage = useRouter().asPath.split('/')[1];

  return useMemo(
    () => pages.find((page) => page.link === currentPage)?.link,
    [pages, currentPage],
  );
}
