import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import { darken } from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Formik } from 'formik';
import useFormCookie from '@hooks/useFormCookie';
import StepperLayout from './StepperLayout/StepperLayout';
import ExpandIconButton from '@elements/ExpandIconButton';
import { ParamContext } from '@Form/FormContextProvider';
import { getCurrentValidationSchema } from '@data/validationSchemas';
import useFormInitialValues from '@hooks/useFormInitialValues';
import usePathChangeEffect from './hooks/usePathChangeEffect';
import BookingTitle from './Elements/BookingTitle';
import { BookingAccordionDetails } from './Elements/BookingAccordionDetails';

export const BookingContext = createContext();

function BookingLayout() {
  const context = useContext(ParamContext);

  const initialValues = useFormInitialValues();
  const [parsedData, setCookie] = useFormCookie(initialValues, context.type);

  const [expanded, setExpanded] = useState(Boolean(parsedData?.isBookingOpen));

  const initExpand = useCallback(() => {
    setExpanded(false);
    setCookie({ isBookingOpen: false });
  }, [setCookie]);

  usePathChangeEffect(initExpand);

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

  const contextValue = {
    cookieData: parsedData,
    setCookie,
    currentValidationSchema,
  };

  return (
    <Paper
      id="bookingLayoutWrapper"
      ref={paperRef}
      square
      sx={{
        top: { xs: 0, sm: expanded ? 0 : 64 },
        padding: 3,
        backgroundColor: 'black',
        zIndex: 10,
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={handleExpand}
        TransitionProps={{ unmountOnExit: true }}
        elevation={0}
        sx={{}}
      >
          <BookingTitle>Book Now</BookingTitle>
        <BookingAccordionDetails>
          <Formik
            initialValues={parsedData}
            validationSchema={currentValidationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <BookingContext.Provider value={contextValue}>
                <StepperLayout />
              </BookingContext.Provider>
            )}
          </Formik>
        </BookingAccordionDetails>
      </Accordion>
    </Paper>
  );
}

export default React.memo(BookingLayout);
