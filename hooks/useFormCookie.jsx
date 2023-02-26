import dayjs from 'dayjs';
import { useCallback, useMemo } from 'react';
import { useCookies } from 'react-cookie';

function useFormCookie(initialValues) {
  const [cookies, setCookie] = useCookies(['EmeraldTransferFormCache']);
  const data = cookies.EmeraldTransferFormCache;
  const parsedData = useMemo(
    () =>
      data
        ? {
            ...initialValues,
            ...data,
            flightDetails: {
              ...initialValues.flightDetails,
              ...data.flightDetails,
              arrive: dayjs(
                data?.flightDetails?.arrive ||
                  initialValues?.flightDetails?.arrive,
              ),
              depart: dayjs(
                data?.flightDetails?.depart ||
                  initialValues?.flightDetails?.depart,
              ),
            },
          }
        : initialValues,
    [data, initialValues],
  );

  const setFormCookie = useCallback(
    (values) => {
      const cookieOptions = {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      };
      setCookie(
        'EmeraldTransferFormCache',
        JSON.stringify({
          ...data,
          ...values,
        }),
        cookieOptions,
      );
    },
    [data, setCookie],
  );

  return [parsedData, setFormCookie];
}

export default useFormCookie;
