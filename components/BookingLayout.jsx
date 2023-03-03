import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React, { useCallback, useEffect, useState } from 'react';
import StepperLayout from '@Stepper/StepperLayout';
import ExpandIcon from '@elements/ExpandIcon';
import { Formik } from 'formik';
import {
  transferInitialValues,
  getCurrentValidationSchema,
} from 'data/transferFormData';
import useFormCookie from '@hooks/useFormCookie';

function BookingLayout() {
  const [parsedData, setCookie] = useFormCookie(transferInitialValues);

  const [expanded, setExpanded] = useState(Boolean(parsedData?.isBookingOpen));
  const [currentValidationSchema, setValidationSchema] = useState(
    getCurrentValidationSchema(parsedData?.bookingStep),
  );

  useEffect(() => {
    setValidationSchema(getCurrentValidationSchema(parsedData?.bookingStep));
  }, [parsedData.bookingStep]);

  const handleExpand = useCallback(() => {
    setExpanded(!expanded);
    setCookie({ isBookingOpen: !expanded });
  }, [expanded, setCookie]);

  const onSubmit = useCallback((values, { setSubmitting }) => {
    // * submitting logic goes here
    setSubmitting(false);
  }, []);

  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpand}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls={`location-booking-form`}
      >
        <Typography variant="h6">Begin Booking</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Formik
          initialValues={parsedData}
          validationSchema={currentValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <StepperLayout
              cookieData={parsedData}
              setCookie={setCookie}
            />
          )}
        </Formik>
      </AccordionDetails>
    </Accordion>
  );
}

export default React.memo(BookingLayout);
