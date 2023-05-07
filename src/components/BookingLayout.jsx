import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { darken } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Formik } from 'formik';
import useFormCookie from '@hooks/useFormCookie';
import StepperLayout from '@Stepper/StepperLayout';
import ExpandIconButton from '@elements/ExpandIconButton';
import { ParamContext } from './FormComponents/FormContextProvider';
import { getCurrentValidationSchema } from '@data/validationSchemas';
import useFormInitialValues from '@hooks/useFormInitialValues';
import useUrlCheck from '@hooks/useUrlCheck';

function BookingLayout() {
  const context = useContext(ParamContext);

  const initialValues = useFormInitialValues();
  const [parsedData, setCookie] = useFormCookie(initialValues, context.type);

  const [expanded, setExpanded] = useState(Boolean(parsedData?.isBookingOpen));

  const initExpand = useCallback(() => {
    setExpanded(false);
    setCookie({ isBookingOpen: false });
  }, [setCookie]);

  useUrlCheck(initExpand);

  const currentValidationSchemaVal = useMemo(
    () => getCurrentValidationSchema(parsedData?.bookingStep, context.type),
    [parsedData?.bookingStep, context.type],
  );

  const [currentValidationSchema, setValidationSchema] = useState(
    currentValidationSchemaVal,
  );

  useEffect(() => {
    setValidationSchema(
      getCurrentValidationSchema(parsedData?.bookingStep, context.type),
    );
  }, [parsedData.bookingStep, context.type]);

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
        expandIcon={<ExpandIconButton />}
        aria-controls={`location-booking-form`}
        sx={{
          backgroundColor: (theme) => darken(theme.palette.secondary.main, 0.2),
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">Begin Booking</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ mt: 4 }}>
        <Formik
          initialValues={parsedData}
          validationSchema={currentValidationSchema}
          onSubmit={onSubmit}
        >
          {() => (
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
