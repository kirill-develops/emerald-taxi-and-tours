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

  const [formCookie, setFormCookie] = useCookies([cookieName]);

  const data = useMemo(() => formCookie[cookieName], [formCookie, cookieName]);

  const parseFlightDetails = useCallback(
    (data) => {
      const { arrive: initialArrive, depart: initialDepart } =
        initialValues.flightDetails;

      const { arrive: dataArrive, depart: dataDepart } =
        data?.flightDetails || {};

      return {
        ...initialValues.flightDetails,
        ...data?.flightDetails,
        arrive: dataArrive ? dayjs(dataArrive) : initialArrive,
        depart: dataDepart ? dayjs(dataDepart) : initialDepart,
      };
    },
    [initialValues],
  );

  const parseTourDetails = useCallback(
    (data) => {
      const { date: initialTourDate, time: initialTourTime } =
        initialValues.tourDetails;

      const { date: dataTourDate, time: dataTourTime } =
        data?.tourDetails || {};

      return {
        ...initialValues.tourDetails,
        ...data?.tourDetails,
        date: dataTourDate ? dayjs(dataTourDate) : initialTourDate,
        time: dataTourTime ? dayjs(dataTourTime) : initialTourTime,
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

  const updateFormCookie = useCallback(
    (values) => {
      const valueSubclass = Object.keys(values || {}).reduce((acc, key) => key);

      const filteredCookie = Object.entries(values[valueSubclass] || {}).reduce(
        (acc, [key, _value]) => {
          if (formattedCookie[valueSubclass]?.hasOwnProperty(key)) {
            acc[valueSubclass][key] = formattedCookie[valueSubclass][key];
          }
          return acc;
        },
        { [valueSubclass]: {} },
      );

      if (!isEqual(filteredCookie, values)) {
        const updatedCookie = getUpdatedCookie(values);

        setFormCookie(cookieName, JSON.stringify(updatedCookie), cookieOptions);
      }
    },
    [cookieName, formattedCookie, setFormCookie, getUpdatedCookie],
  );

  const parsedCookie = useMemo(() => {
    if (!data) {
      setFormCookie(cookieName, JSON.stringify(initialValues), cookieOptions);

      return initialValues;
    }

    return formattedCookie;
  }, [cookieName, data, initialValues, formattedCookie, setFormCookie]);

  return useMemo(
    () => [parsedCookie, updateFormCookie],
    [parsedCookie, updateFormCookie],
  );
}

export default useFormCookie;
