import { parseFlightDetails } from './parseFlightDetails';
import { parseTourDetails } from './parseTourDetails';

export const getParsedCookieValues = (
  initialValues,
  cookieData,
  bookingType,
) => {
  const defaultFormattedCookie = {
    ...initialValues,
    ...cookieData,
    personalDetails: {
      ...initialValues.personalDetails,
      ...cookieData?.personalDetails,
    },
  };

  if (bookingType === 'transfer') {
    return {
      ...defaultFormattedCookie,
      flightDetails: parseFlightDetails(cookieData, initialValues),
    };
  } else if (bookingType === 'tour') {
    return {
      ...defaultFormattedCookie,
      tourDetails: parseTourDetails(cookieData, initialValues),
    };
  }
};
