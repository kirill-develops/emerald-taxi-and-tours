import { Formik } from 'formik';
import React, { useCallback, useContext } from 'react';
import { BookingContext } from '../BookingLayout';

export default function BookingFormik({ children, ...rest }) {
  const { cookieData, currentValidationSchema } = useContext(BookingContext);

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
