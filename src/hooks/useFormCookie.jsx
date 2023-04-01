import dayjs from 'dayjs';
import isEqual from 'lodash/isEqual';
import { useCallback, useMemo } from 'react';
import { useCookies } from 'react-cookie';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const cookieOptions = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 1 week
};

function useFormCookie(initialValues, contextType) {
  const cookieName = useMemo(
    () => `Emerald${capitalize(contextType)}FormCache`,
    [contextType],
  );

  const [cookies, setCookie] = useCookies([cookieName]);

  const data = useMemo(() => cookies[cookieName], [cookies, cookieName]);

  const parseFlightDetails = useCallback(
    (data) => {
      const currentDateTime = dayjs();

      const {
        flightDetails: { arrive: initialArrive, depart: initialDepart },
      } = initialValues;

      const dataArrive = data?.flightDetails?.arrive;

      const dataDepart = data?.flightDetails?.depart;

      if (!dataArrive || !dataDepart) {
        return {
          ...initialValues.flightDetails,
          ...data?.flightDetails,
          arrive: initialArrive,
          depart: initialDepart,
        };
      }

      const isArriveBeforeCurrentDate =
        dataArrive && dayjs(dataArrive).isBefore(currentDateTime);

      const isDepartBeforeCurrentDate =
        dataDepart && dayjs(dataDepart).isBefore(currentDateTime);

      return {
        ...initialValues.flightDetails,
        ...data?.flightDetails,
        arrive: isArriveBeforeCurrentDate ? initialArrive : dayjs(dataArrive),
        depart: isDepartBeforeCurrentDate ? initialDepart : dayjs(dataDepart),
      };
    },
    [initialValues],
  );

  const parseTourDetails = useCallback(
    (data) => {
      const currentDateTime = dayjs();

      const {
        tourDetails: { tourDate: initialTourDate },
      } = initialValues;

      const dataTourDate = data?.tourDetails?.tourDate;

      const isTourDateBeforeCurrentDate =
        dataTourDate ?? dayjs(dataTourDate).isBefore(currentDateTime);

      return {
        ...initialValues.tourDetails,
        ...data?.tourDetails,
        tourDate: isTourDateBeforeCurrentDate
          ? initialTourDate
          : dayjs(dataTourDate),
      };
    },
    [initialValues],
  );

  const formattedCookie = useMemo(() => {
    const defaultFormattedCookie = {
      ...initialValues,
      ...data,
      personalDetails: {
        ...initialValues.personalDetails,
        ...data?.personalDetails,
      },
    };

    if (contextType === 'transfer') {
      return {
        ...defaultFormattedCookie,
        flightDetails: parseFlightDetails(data),
      };
    } else if (contextType === 'tour') {
      return {
        ...defaultFormattedCookie,
        tourDetails: parseTourDetails(data),
      };
    }
  }, [contextType, data, initialValues, parseFlightDetails, parseTourDetails]);

  const getUpdatedCookie = useCallback(
    (values) => {
      const defaultUpdatedCookie = {
        ...data,
        ...values,
        personalDetails: {
          ...data?.personalDetails,
          ...values?.personalDetails,
        },
      };

      if (contextType === 'transfer') {
        return {
          ...defaultUpdatedCookie,
          flightDetails: {
            ...data?.flightDetails,
            ...values?.flightDetails,
          },
        };
      } else if (contextType === 'tour') {
        return {
          ...defaultUpdatedCookie,
          tourDetails: {
            ...data?.tourDetails,
            ...values?.tourDetails,
          },
        };
      }
    },
    [contextType, data],
  );

  const setFormCookie = useCallback(
    (values) => {
      const valueSubclass = Object.keys(values || {}).reduce((acc, key) => key);

      const filteredCookie = Object.entries(
        formattedCookie[valueSubclass],
      ).reduce(
        (acc, [key, value]) => {
          if (values[valueSubclass].hasOwnProperty(key)) {
            acc[valueSubclass][key] = value;
          }
          return acc;
        },
        { [valueSubclass]: {} },
      );

      if (!isEqual(filteredCookie, values)) {
        const updatedCookie = getUpdatedCookie(values);

        setCookie(cookieName, JSON.stringify(updatedCookie), cookieOptions);
      }
    },
    [cookieName, formattedCookie, setCookie, getUpdatedCookie],
  );

  const parsedData = useMemo(() => {
    if (!data) {
      setCookie(cookieName, JSON.stringify(initialValues), cookieOptions);
      return initialValues;
    }

    return formattedCookie;
  }, [cookieName, data, initialValues, formattedCookie, setCookie]);

  return useMemo(
    () => [parsedData, setFormCookie],
    [parsedData, setFormCookie],
  );
}

export default useFormCookie;
