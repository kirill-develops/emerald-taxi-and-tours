import dayjs from 'dayjs';
import isEqual from 'lodash/isEqual';
import { useCallback, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { ParamContext } from '@components/FormComponents/FormContextProvider';

function useAccomName(contextType) {
  const paramContext = useContext(ParamContext);

  if (contextType === 'tour') {
    return '';
  }

  const {
    areaParams: { link: areaLink, name: areaName },
    transferParams: { link: transferLink, name: transferName },
  } = paramContext;

  if (transferLink !== 'other' && areaLink !== 'other_areas') {
    return `${transferName} in ${areaName}`;
  } else {
    return '';
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function useFormCookie(initialValues, contextType) {
  const cookieName = `Emerald${capitalize(contextType)}FormCache`;

  const [cookies, setCookie] = useCookies([cookieName]);
  const data = cookies[cookieName];
  const accomName = useAccomName(contextType);

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
        accomName: accomName,
      };
    },
    [initialValues, accomName],
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
          ...values.personalDetails,
        },
      };

      if (contextType === 'transfer') {
        return {
          ...defaultUpdatedCookie,
          flightDetails: {
            ...data?.flightDetails,
            ...values.flightDetails,
          },
        };
      } else if (contextType === 'tour') {
        return {
          ...defaultUpdatedCookie,
          tourDetails: {
            ...data?.tourDetails,
            ...values.tourDetails,
          },
        };
      }
    },
    [contextType, data],
  );

  const setFormCookie = useCallback(
    (values) => {
      const cookieOptions = {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      };

      // console.log(isEqual(formattedCookie, values), formattedCookie, values); //! for debugging

      if (!isEqual(formattedCookie, values)) {
        const updatedCookie = getUpdatedCookie(values);

        // console.log(updatedCookie); //! for debugging

        setCookie(cookieName, JSON.stringify(updatedCookie), cookieOptions);
      }
    },
    [cookieName, formattedCookie, setCookie, getUpdatedCookie],
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
