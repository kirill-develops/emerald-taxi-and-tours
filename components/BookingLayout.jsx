import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React, { useCallback, useState } from 'react';
import StepperLayout from '@Stepper/StepperLayout';
import ExpandIcon from '@elements/ExpandIcon';
import { Formik } from 'formik';
import { transferInitialValues, validationSchema } from 'data/transferFormData';
import useFormCookie from '@hooks/useFormCookie';

function BookingLayout({}) {
  const [parsedData, setCookie] = useFormCookie(transferInitialValues);

  const [expanded, setExpanded] = useState(Boolean(parsedData));

  const handleExpand = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpand}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls={`!location-booking-form`}
        id={'!location-booking-header'}
      >
        <Typography variant="h6">Begin Booking</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Formik
          initialValues={parsedData || transferInitialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => <StepperLayout setCookie={setCookie} />}
        </Formik>
      </AccordionDetails>
    </Accordion>
  );
}

export default BookingLayout;
