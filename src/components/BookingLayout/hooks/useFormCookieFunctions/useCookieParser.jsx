import { useMemo } from 'react';
import useFormInitValues from '../useFormInitValues';
import parseDetails from './parseDetails';

export default function useCookieParser(cookieData, bookingType) {
  const initialValues = useFormInitValues();

  const detailsData = parseDetails(cookieData, initialValues, bookingType);

  return useMemo(() => {
    const formattedCookie = {
      ...initialValues,
      ...cookieData,
      personalDetails: {
        ...initialValues.personalDetails,
        ...cookieData?.personalDetails,
      },
    };

    if (detailsData) {
      formattedCookie[`${bookingType}Details`] = detailsData;
    }

    return formattedCookie;
  }, [initialValues, cookieData, detailsData, bookingType]);
}
