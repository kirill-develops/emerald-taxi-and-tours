import dayjs from 'dayjs';
import isEqual from 'lodash/isEqual';
import { useCallback, useMemo } from 'react';
import { useCookies } from 'react-cookie';

function useFormCookie(initialValues) {
  const [cookies, setCookie] = useCookies(['EmeraldTransferFormCache']);
  const data = cookies.EmeraldTransferFormCache;

  const parseFlightDetails = useCallback(
    (data) => {
      const currentDateTime = dayjs();
      const initialArrive = initialValues.flightDetails.arrive;
      const initialDepart = initialValues.flightDetails.depart;
      const arriveData = data?.flightDetails?.arrive;
      const departData = data?.flightDetails?.depart;
      const isArriveBeforeCurrentDate =
        dayjs(arriveData).isBefore(currentDateTime);
      const isDepartBeforeCurrentDate =
        dayjs(departData).isBefore(currentDateTime);

      return {
        ...initialValues.flightDetails,
        ...data.flightDetails,
        arrive: isArriveBeforeCurrentDate ? initialArrive : dayjs(arriveData),
        depart: isDepartBeforeCurrentDate ? initialDepart : dayjs(departData),
      };
    },
    [initialValues.flightDetails],
  );

  const parsedData = useMemo(() => {
    if (!data) return initialValues;

    return {
      ...initialValues,
      ...data,
      flightDetails: parseFlightDetails(data),
    };
  }, [data, initialValues, parseFlightDetails]);

  const setFormCookie = useCallback(
    (values) => {
      const cookieOptions = {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      };

      const formattedCookie = {
        ...data,
        flightDetails: parseFlightDetails(data),
      };

      const areValuesSame = isEqual(formattedCookie, values);

      if (!areValuesSame) {
        setCookie(
          'EmeraldTransferFormCache',
          JSON.stringify({
            ...data,
            ...values,
          }),
          cookieOptions,
        );
      }
    },
    [data, parseFlightDetails, setCookie],
  );

  return useMemo(
    () => [parsedData, setFormCookie],
    [parsedData, setFormCookie],
  );
}

export default useFormCookie;
