import React, { useCallback, useContext, useMemo } from 'react';
import StepperLayout from './StepperLayout/StepperLayout';
import { ParamContext } from '@context/FormContextProvider';
import BookingAccordionSummary from './Elements/BookingAccordionSummary';
import BookingAccordionDetails from './Elements/BookingAccordionDetails';
import BookingPaper from './Elements/BookingPaper';
import BookingAccordion from './Elements/BookingAccordionComponent';
import BookingFormik from './Elements/BookingFormik';
import useExpandInit from './hooks/useExpandInit';
import useFormCookie from './hooks/useFormCookie';
import BookingContext from '@context/BookingContext';
import CardTitle from '@elements/CardTitle';
import BookingBackdrop from './Elements/BookingBackdrop';
import useUrlHashBookingStep from './hooks/useUrlHashBookingStep';

export default React.memo(function BookingLayout() {
  const { type: bookingType } = useContext(ParamContext);

  const [parsedData, setCookie] = useFormCookie();
  const { isBookingOpen } = parsedData;

  const matchedBookingStep = useUrlHashBookingStep(
    setCookie,
    parsedData.bookingStep,
  );

  const [expanded, setExpanded] = useExpandInit(
    setCookie,
    Boolean(matchedBookingStep > -1) || isBookingOpen,
  );

  const handleExpanded = useCallback(() => {
    setExpanded((prev) => {
      setCookie({ isBookingOpen: !prev });
      return !prev;
    });
  }, [setExpanded, setCookie]);

  const contextValue = useMemo(
    () => ({
      cookieData: parsedData,
      setCookie,
      expanded,
      handleExpanded,
      bookingType,
    }),
    [parsedData, setCookie, expanded, handleExpanded, bookingType],
  );

  return (
    <BookingContext.Provider value={contextValue}>
      <BookingPaper>
        <BookingAccordion>
          <BookingAccordionSummary>
            <CardTitle uppercase>Book Now</CardTitle>
          </BookingAccordionSummary>
          <BookingAccordionDetails>
            <BookingFormik>
              <StepperLayout />
            </BookingFormik>
          </BookingAccordionDetails>
        </BookingAccordion>
      </BookingPaper>
      <BookingBackdrop />
    </BookingContext.Provider>
  );
});
