import { useFormikContext } from 'formik';
import React, { useCallback, useContext } from 'react';
import { BookingContext } from '../../BookingLayout';

export default function useFormReset() {
  const { cookieData } = useContext(BookingContext);

  const { setTouched, setValues } = useFormikContext();

  const formReset = useCallback(() => {
    setTouched({});
    setValues(cookieData);
  }, [cookieData, setTouched, setValues]);

  return formReset;
}
