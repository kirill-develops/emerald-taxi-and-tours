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
      const {
        flightDetails: { arrive: initialArrive, depart: initialDepart },
      } = initialValues;
      const dataArrive = data?.flightDetails?.arrive;
      const dataDepart = data?.flightDetails?.depart;

      const isArriveBeforeCurrentDate =
        dataArrive && dayjs(dataArrive).isBefore(currentDateTime);
      const isDepartBeforeCurrentDate =
        dataDepart && dayjs(dataDepart).isBefore(currentDateTime);

      // console.table(
      //   'currentDateTime: ',
      //   currentDateTime,
      //   'dataArrive: ',
      //   dataArrive,
      //   'isArriveBeforeCurrentDate: ',
      //   isArriveBeforeCurrentDate,
      //   'dataDepart: ',
      //   dataDepart,
      //   'isDepartBeforeCurrentDate: ',
      //   isDepartBeforeCurrentDate,
      // ); //! for debugging

      return {
        ...initialValues.flightDetails,
        ...data?.flightDetails,
        arrive: isArriveBeforeCurrentDate ? initialArrive : dayjs(dataArrive),
        depart: isDepartBeforeCurrentDate ? initialDepart : dayjs(dataDepart),
      };
    },
    [initialValues],
  );

  const formattedCookie = useMemo(() => {
    return {
      ...initialValues,
      ...data,
      flightDetails: parseFlightDetails(data),
      personalDetails: {
        ...initialValues.personalDetails,
        ...data?.personalDetails,
      },
    };
  }, [data, initialValues, parseFlightDetails]);

  const getUpdatedCookie = useCallback(
    (values) => {
      return {
        ...data,
        ...values,
        flightDetails: {
          ...data?.flightDetails,
          ...values.flightDetails,
        },
        personalDetails: {
          ...data?.personalDetails,
          ...values.personalDetails,
        },
      };
    },
    [data],
  );

  const setFormCookie = useCallback(
    (values) => {
      const cookieOptions = {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      };

      const areValuesSame = isEqual(formattedCookie, values);

      // console.log(areValuesSame, formattedCookie, values); //! for debugging

      if (!areValuesSame) {
        const updatedCookie = getUpdatedCookie(values);

        // console.log(updatedCookie); //! for debugging

        setCookie(
          'EmeraldTransferFormCache',
          JSON.stringify(updatedCookie),
          cookieOptions,
        );
      }
    },
    [formattedCookie, setCookie, getUpdatedCookie],
  );

  const parsedData = useMemo(() => {
    if (!data) {
      setFormCookie(initialValues);
      return initialValues;
    }

    return formattedCookie;
  }, [data, initialValues, formattedCookie, setFormCookie]);

  return useMemo(
    () => [parsedData, setFormCookie],
    [parsedData, setFormCookie],
  );
}

export default useFormCookie;
