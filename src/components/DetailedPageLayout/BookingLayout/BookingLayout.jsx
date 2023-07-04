import Backdrop from '@mui/material/Backdrop';
import React, { useCallback, useContext } from 'react';
import StepperLayout from './StepperLayout/StepperLayout';
import { ParamContext } from '@context/FormContextProvider';
import BookingAccordionSummary from './Elements/BookingAccordionSummary';
import BookingTitle from './Elements/BookingTitle';
import BookingAccordionDetails from './Elements/BookingAccordionDetails';
import BookingPaper from './Elements/BookingPaper';
import BookingAccordion from './Elements/BookingAccordionComponent';
import BookingFormik from './Elements/BookingFormik';
import useExpandInit from './hooks/useExpandInit';
import useFormCookie from './hooks/useFormCookie';
import BookingContext from '@context/BookingContext';

const backdropStyles = { zIndex: 9 };

function BookingBackdrop() {
  const { expanded, handleExpanded } = useContext(BookingContext);

  return (
    <Backdrop
      open={expanded}
      onClick={handleExpanded}
      sx={backdropStyles}
    />
  );
}

export default React.memo(function BookingLayout() {
  const { type: bookingType } = useContext(ParamContext);

  const [parsedData, setCookie] = useFormCookie();

  const { isBookingOpen } = parsedData;

  const [expanded, setExpanded] = useExpandInit(setCookie, isBookingOpen);

  const handleExpanded = useCallback(() => {
    setExpanded((prev) => {
      setCookie({ isBookingOpen: !prev });
      return !prev;
    });
  }, []);

  const contextValue = {
    cookieData: parsedData,
    setCookie,
    expanded,
    handleExpanded,
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
      <BookingBackdrop />
    </BookingContext.Provider>
  );
});
