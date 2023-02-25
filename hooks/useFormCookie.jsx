import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';

function useFormCookie(initialValues) {
  const [cookies, setCookie] = useCookies(['EmeraldTransferFormCache']);
  const data = cookies.EmeraldTransferFormCache;
  const parsedData = data && {
    ...initialValues,
    ...data,
    arrive: dayjs(data.arrive),
    depart: dayjs(data.depart),
  };

  const setFormCookie = useCallback(
    (values) => {
      const cookieOptions = {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      };
      setCookie(
        'EmeraldTransferFormCache',
        JSON.stringify(values),
        cookieOptions,
      );
    },
    [setCookie],
  );

  return [parsedData, setFormCookie];
}

export default useFormCookie;
