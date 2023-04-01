import dayjs from 'dayjs';
import { ParamContext } from '@components/FormComponents/FormContextProvider';
import { useContext, useMemo } from 'react';

function useAccomName(contextType, paramContext) {
  return useMemo(() => {
    if (contextType === 'tour') {
      return '';
    }

    const {
      areaParams: { link: areaLink, name: areaName },
      transferParams: { link: transferLink, name: transferName },
    } = paramContext;

    if (transferLink !== 'other' && areaLink !== 'other_areas') {
      return `${transferName} in ${areaName}`;
    } else {
      return '';
    }
  }, [paramContext, contextType]);
}

function useFormInitialValues() {
  const context = useContext(ParamContext);

  const accomName = useAccomName(context.type, context);

  const startDate = useMemo(() => dayjs().add(1, 'day'), []);
  const endDate = useMemo(() => dayjs().add(7, 'day'), []);

  const transferInitialValues = useMemo(
    () => ({
      bookingStep: 0,
      isBookingOpen: false,
      flightDetails: {
        airline: '',
        flightNum: '',
        transferType: 'roundtrip',
        arrive: startDate,
        depart: endDate,
        passengers: 1,
        childPassengers: 0,
        accomName: accomName,
      },
      personalDetails: {
        firstName: '',
        lastName: '',
        email: '',
        emailConfirm: '',
        country: 'US',
        mobile: '',
      },
      paymentDetails: {
        paymentAuthorized: false,
      },
      confirmDetails: {
        userConfirmed: false,
      },
    }),
    [accomName, startDate, endDate],
  );

  const tourInitialValues = useMemo(
    () => ({
      bookingStep: 0,
      isBookingOpen: false,
      tourDetails: {
        tourDate: startDate,
        accomName: '',
        area: '',
        passengers: 1,
        childPassengers: 0,
      },
      personalDetails: {
        firstName: '',
        lastName: '',
        email: '',
        emailConfirm: '',
        country: 'US',
        mobile: '',
      },
      paymentDetails: {
        paymentAuthorized: false,
      },
      confirmDetails: {
        userConfirmed: false,
      },
    }),
    [startDate],
  );

  return useMemo(
    () => (context.type === 'tour' ? tourInitialValues : transferInitialValues),
    [context.type, tourInitialValues, transferInitialValues],
  );
}

export default useFormInitialValues;
