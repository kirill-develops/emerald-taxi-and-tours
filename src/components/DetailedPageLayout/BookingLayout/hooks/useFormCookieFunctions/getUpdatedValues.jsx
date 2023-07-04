export const getUpdatedValues = (values, cookieData, bookingType) => {
  const defaultUpdatedCookie = {
    ...cookieData,
    ...values,
    personalDetails: {
      ...cookieData?.personalDetails,
      ...values?.personalDetails,
    },
  };

  if (bookingType === 'transfer') {
    return {
      ...defaultUpdatedCookie,
      flightDetails: {
        ...cookieData?.flightDetails,
        ...values?.flightDetails,
      },
    };
  } else if (bookingType === 'tour') {
    return {
      ...defaultUpdatedCookie,
      tourDetails: {
        ...cookieData?.tourDetails,
        ...values?.tourDetails,
      },
    };
  }
};
