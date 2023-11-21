import { useRouter } from 'next/router';
import { useMemo } from 'react';

export default function useFindCurrentPage(pages) {
  const currentPage = useRouter()
    .asPath.split('/')
    .map((each) => `/${each}`);

  return useMemo(
    () => pages?.find((page) => currentPage.includes(page.link))?.link,
    [pages, currentPage],
  );
}
