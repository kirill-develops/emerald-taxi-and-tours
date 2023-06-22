import Accordion from '@mui/material/Accordion';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
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
import { ParamContext } from '@Form/FormContextProvider';
import { getCurrentValidationSchema } from '@data/validationSchemas';
import useFormInitialValues from '@hooks/useFormInitialValues';
import usePathChangeEffect from './hooks/usePathChangeEffect';
import BookingAccordionSummary from './Elements/BookingAccordionSummary';
import BookingTitle from './Elements/BookingTitle';
import { BookingAccordionDetails } from './Elements/BookingAccordionDetails';
import BookingPaper from './Elements/BookingPaper';

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

  const contextValue = {
    cookieData: parsedData,
    setCookie,
    currentValidationSchema,
    paperRef,
    expanded,
    setExpanded,
  };

  return (
    <BookingContext.Provider value={contextValue}>
      <BookingPaper>
        <BookingAccordion>
          <BookingAccordionSummary>
            <BookingTitle>Book Now</BookingTitle>
          </BookingAccordionSummary>
          <BookingAccordionDetails>
            <BookingFormik>{() => <StepperLayout />}</BookingFormik>
          </BookingAccordionDetails>
        </BookingAccordion>
      </BookingPaper>
    </BookingContext.Provider>
  );
}

export default React.memo(BookingLayout);
