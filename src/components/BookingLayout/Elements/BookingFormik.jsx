import { Formik } from 'formik';
import React, { useCallback, useContext } from 'react';
import { BookingContext } from '../BookingLayout';
import useValidationSchema from '../hooks/useValidationSchema';

export default function BookingFormik({ children, ...rest }) {
  const { cookieData, bookingType } = useContext(BookingContext);

  const currentValidationSchema = useValidationSchema(
    cookieData.bookingStep,
    bookingType,
  );

  const onSubmit = useCallback((values, { setSubmitting }) => {
    // * submitting logic goes here
    setSubmitting(false);
  }, []);

  return (
    <Formik
      initialValues={cookieData}
      validationSchema={currentValidationSchema}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </Formik>
  );
}
