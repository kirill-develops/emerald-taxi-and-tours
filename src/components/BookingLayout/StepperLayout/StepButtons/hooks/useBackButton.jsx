import { useFormikContext } from 'formik';
import React, { useCallback, useContext, useMemo } from 'react';
import { BookingContext } from '../../../BookingLayout';

export default function useBackButton() {
  const {
    setFieldValue,
    values: { bookingStep },
  } = useFormikContext();
  const { setCookie } = useContext(BookingContext);

  const isFirstStep = bookingStep === 0;

  const handleBackClick = useCallback(
    (step) => {
      setFieldValue('bookingStep', step, false);
      setCookie({ bookingStep: step });
    },
    [setFieldValue, setCookie],
  );

  return useMemo(
    () => ({
      handleBackClick: () => handleBackClick(bookingStep - 1),
      isFirstStep,
    }),
    [handleBackClick, isFirstStep, bookingStep],
  );
}
