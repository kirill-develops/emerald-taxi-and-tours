import { useFormikContext } from 'formik';
import { useCallback, useContext } from 'react';
import BookingContext from '@context/BookingContext';

export default function useFormReset() {
  const { cookieData } = useContext(BookingContext);

  const { setTouched, setValues } = useFormikContext();

  const formReset = useCallback(() => {
    setTouched({});
    setValues(cookieData);
  }, [cookieData, setTouched, setValues]);

  return formReset;
}
