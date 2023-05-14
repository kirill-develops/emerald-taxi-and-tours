import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import { darken } from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Formik } from 'formik';
import useFormCookie from '@hooks/useFormCookie';
import StepperLayout from '@Stepper/StepperLayout';
import ExpandIconButton from '@elements/ExpandIconButton';
import { ParamContext } from '@Form/FormContextProvider';
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

  const paperRef = useRef(null);

  useEffect(() => {
    if (expanded) {
      paperRef.current.style.position = 'relative';
    } else {
      paperRef.current.style.position = 'sticky';
    }
  });

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const screenPosition = isXs ? 0 : 130;

  const handleExpand = useCallback(() => {
    if (!expanded) {
      paperRef.current.style.position = 'relative';

      const rect = paperRef.current.getBoundingClientRect();
      const isBelowTopViewport = rect.top > screenPosition;

      if (!isBelowTopViewport) {
        paperRef.current.scrollIntoView({
          behavior: 'auto',
        });

        setTimeout(() => {
          setExpanded(!expanded);
          setCookie({ isBookingOpen: !expanded });
        }, 50);
      } else {
        setExpanded(!expanded);
        setCookie({ isBookingOpen: !expanded });
      }
    } else {
      paperRef.current.style.position = 'sticky';
      setExpanded(!expanded);
      setCookie({ isBookingOpen: !expanded });
    }
  }, [expanded, setCookie, screenPosition]);

  const onSubmit = useCallback((values, { setSubmitting }) => {
    // * submitting logic goes here
    setSubmitting(false);
  }, []);

  return (
    <Paper
      id="bookingLayoutWrapper"
      ref={paperRef}
      elevation={3}
      square
      sx={{
        top: { xs: 0, sm: expanded ? 0 : 64 },
        padding: 3,
        marginX: -3,
        backgroundColor: 'black',
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={handleExpand}
        TransitionProps={{ unmountOnExit: true }}
        elevation={0}
        sx={{}}
      >
        <AccordionSummary
          expandIcon={<ExpandIconButton />}
          aria-controls={`location-booking-form`}
          sx={{
            backgroundColor: (theme) =>
              darken(theme.palette.secondary.main, 0.2),
            borderRadius: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, textTransform: 'uppercase' }}
          >
            Book Now
          </Typography>
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
    </Paper>
  );
}

export default React.memo(BookingLayout);