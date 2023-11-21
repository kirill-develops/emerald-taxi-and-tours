import { useFormikContext } from 'formik';
import { useContext, useEffect, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import BookingContext from '@context/BookingContext';

export default function useSaveFormToCookie() {
  const { values, errors, touched } = useFormikContext();
  const { type } = useContext(ParamContext);
  const { setCookie } = useContext(BookingContext);

  const valueSubclass = useMemo(() => {
    if (values.bookingStep === 1) {
      return 'personalDetails';
    } else {
      return type === 'transfer' ? 'flightDetails' : 'tourDetails';
    }
  }, [type, values.bookingStep]);

  const valuesWithoutErrors = useMemo(() => {
    const filteredValues = Object.entries(values[valueSubclass] || {}).reduce(
      (acc, [key, value]) => {
        const hasError = errors[valueSubclass]?.[key];

        const isTouched = touched[valueSubclass]?.[key];

        if (!hasError && value) {
          acc[key] = value;
        }

        return acc;
      },
      {},
    );

    return { [valueSubclass]: filteredValues };
  }, [errors, touched, values, valueSubclass]);

  useEffect(() => {
    const hasValuesToSave =
      Object.keys(valuesWithoutErrors[valueSubclass]).length > 0;

    if (hasValuesToSave) {
      setCookie(valuesWithoutErrors);
    }
  }, [valuesWithoutErrors, valueSubclass, setCookie]);
}
