import React, { createContext, useContext, useRef } from 'react';
import StepperLayout from './StepperLayout/StepperLayout';
import { ParamContext } from '@Form/FormContextProvider';
import BookingAccordionSummary from './Elements/BookingAccordionSummary';
import BookingTitle from './Elements/BookingTitle';
import { BookingAccordionDetails } from './Elements/BookingAccordionDetails';
import BookingPaper from './Elements/BookingPaper';
import BookingAccordion from './Elements/BookingAccordionComponent';
import BookingFormik from './Elements/BookingFormik';
import useExpandInit from './hooks/useExpandInit';
import useFormCookie from './hooks/useFormCookie';

export const BookingContext = createContext();

function BookingLayout() {
  const { type: bookingType } = useContext(ParamContext);

  const [parsedData, setCookie] = useFormCookie();

  const { isBookingOpen } = parsedData;

  const [expanded, setExpanded] = useExpandInit(setCookie, isBookingOpen);

  const paperRef = useRef(null);

  const contextValue = {
    cookieData: parsedData,
    setCookie,
    paperRef,
    expanded,
    setExpanded,
    bookingType,
  };

  return (
    <BookingContext.Provider value={contextValue}>
      <BookingPaper>
        <BookingAccordion>
          <BookingAccordionSummary>
            <BookingTitle>Book Now</BookingTitle>
          </BookingAccordionSummary>

          <BookingAccordionDetails>
            <BookingFormik>
              <StepperLayout />
            </BookingFormik>
          </BookingAccordionDetails>
        </BookingAccordion>
      </BookingPaper>
    </BookingContext.Provider>
  );
}

export default React.memo(BookingLayout);
