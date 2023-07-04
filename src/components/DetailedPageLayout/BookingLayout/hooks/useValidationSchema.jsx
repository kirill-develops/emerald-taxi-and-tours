import { getCurrentValidationSchema } from '@data/validationSchemas';
import { useEffect, useMemo, useState } from 'react';

export default function useValidationSchema(bookingStep, contextType) {
  const currentValidationSchemaVal = useMemo(
    () => getCurrentValidationSchema(bookingStep, contextType),
    [bookingStep, contextType],
  );

  const [currentValidationSchema, setValidationSchema] = useState(
    currentValidationSchemaVal,
  );

  useEffect(() => {
    setValidationSchema(getCurrentValidationSchema(bookingStep, contextType));
  }, [bookingStep, contextType]);

  return currentValidationSchema;
}
