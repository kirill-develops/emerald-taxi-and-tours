import { useFormikContext } from 'formik';
import { useContext, useEffect, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import BookingContext from '@context/BookingContext';

export default function useSaveFormToCookie() {
  const { values, errors, touched } = useFormikContext();

  const context = useContext(ParamContext);

  const { setCookie } = useContext(BookingContext);

  const valueSubclass = useMemo(
    () => (context.type === 'transfer' ? 'flightDetails' : 'tourDetails'),
    [context.type],
  );

  const valuesWithoutErrors = useMemo(() => {
    const filteredValues = Object.entries(values[valueSubclass] || {}).reduce(
      (acc, [key, value]) => {
        const hasError = errors[valueSubclass]?.[key];

        const isTouched = touched[valueSubclass]?.[key];

        if (!hasError && isTouched) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );

    return { [valueSubclass]: filteredValues };
  }, [errors, touched, values, valueSubclass]);

  useEffect(() => {
    if (Object.keys(valuesWithoutErrors[valueSubclass]).length) {
      setCookie(valuesWithoutErrors);
    }
  }, [valuesWithoutErrors, valueSubclass, setCookie]);
}
