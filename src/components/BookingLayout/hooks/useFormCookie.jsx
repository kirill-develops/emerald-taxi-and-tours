import dayjs from 'dayjs';
import isEqual from 'lodash/isEqual';
import { useCallback, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { capitalize } from '@helperFunctions';
import { ParamContext } from '@Form/FormContextProvider';
import useFormInitialValues from '../../../hooks/useFormInitialValues';

const cookieOptions = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 1 week
};

function checkDate(dataDate, initialDate) {
  const isDataBeforeInitial = dayjs(dataDate)
    .startOf('day')
    .isBefore(dayjs(initialDate).startOf('day'));

  return isDataBeforeInitial ? initialDate : dayjs(dataDate).format();
}

function checkTime(dataTime, initialTime) {
  const isDataBeforeInitial = dayjs(dataTime)
    .startOf('minute')
    .isBefore(dayjs(initialTime).startOf('minute'));

  return isDataBeforeInitial ? initialTime : dayjs(dataTime).format();
}

function checkDepartDate(dataDate, initialDate, departDate) {
  const isDataBeforeInitial = dayjs(dataDate).isBefore(dayjs(initialDate));

  return isDataBeforeInitial ? departDate : dayjs(dataDate).format();
}

function useFormCookie() {
  const { type: bookingType } = useContext(ParamContext);
  const initialValues = useFormInitialValues();

  const cookieName = useMemo(
    () => `Emerald${capitalize(bookingType)}FormCache`,
    [bookingType],
  );

  const [formCookie, setFormCookie] = useCookies([cookieName]);

  const data = useMemo(() => formCookie[cookieName], [formCookie, cookieName]);

  const parseFlightDetails = useCallback(
    (data) => {
      const {
        arrive: initialArrive,
        depart: initialDepart,
        accomName,
      } = initialValues.flightDetails;

      const { arrive: dataArrive, depart: dataDepart } =
        data?.flightDetails ?? {};

      return {
        ...initialValues.flightDetails,
        ...data?.flightDetails,
        accomName: accomName,
        arrive: dataArrive
          ? checkTime(dataArrive, initialArrive)
          : initialArrive,
        depart: dataDepart
          ? checkDepartDate(dataDepart, initialArrive, initialDepart)
          : initialDepart,
      };
    },
    [initialValues],
  );

  const parseTourDetails = useCallback(
    (data) => {
      const { date: initialTourDate, time: initialTourTime } =
        initialValues.tourDetails;

      const { date: dataTourDate, time: dataTourTime } =
        data?.tourDetails ?? {};

      return {
        ...initialValues.tourDetails,
        ...data?.tourDetails,
        date: dataTourDate
          ? checkDate(dataTourDate, initialTourDate)
          : initialTourDate,
        time: dataTourTime
          ? checkTime(dataTourTime, initialTourTime)
          : initialTourTime,
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

    if (bookingType === 'transfer') {
      return {
        ...defaultFormattedCookie,
        flightDetails: parseFlightDetails(data),
      };
    } else if (bookingType === 'tour') {
      return {
        ...defaultFormattedCookie,
        tourDetails: parseTourDetails(data),
      };
    }
  }, [bookingType, data, initialValues, parseFlightDetails, parseTourDetails]);

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

      if (bookingType === 'transfer') {
        return {
          ...defaultUpdatedCookie,
          flightDetails: {
            ...data?.flightDetails,
            ...values?.flightDetails,
          },
        };
      } else if (bookingType === 'tour') {
        return {
          ...defaultUpdatedCookie,
          tourDetails: {
            ...data?.tourDetails,
            ...values?.tourDetails,
          },
        };
      }
    },
    [bookingType, data],
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
