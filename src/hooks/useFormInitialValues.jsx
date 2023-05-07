import dayjs from 'dayjs';
import { ParamContext } from '@components/FormComponents/FormContextProvider';
import { useContext, useMemo } from 'react';

function useAccomName(paramContext) {
  return useMemo(() => {
    if (paramContext.type === 'tour') {
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
  }, [paramContext]);
}

export const transferStartDate = dayjs().add(6, 'hours').format();
export const transferEndDate = dayjs().add(7, 'day').format();
export const tourDate = dayjs().add(3, 'hours').format();

function useFormInitialValues() {
  const context = useContext(ParamContext);

  const accomName = useAccomName(context);

  const commonInitialValues = useMemo(
    () => ({
      bookingStep: 0,
      isBookingOpen: false,
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
    [],
  );

  const transferInitialValues = useMemo(
    () => ({
      ...commonInitialValues,
      flightDetails: {
        airline: '',
        flightNum: '',
        transferType: 'roundtrip',
        arrive: transferStartDate,
        depart: transferEndDate,
        passengers: 1,
        childPassengers: 0,
        accomName,
      },
    }),
    [accomName, commonInitialValues],
  );

  const tourInitialValues = useMemo(
    () => ({
      ...commonInitialValues,
      tourDetails: {
        date: tourDate,
        time: tourDate,
        accomName: '',
        area: '',
        passengers: 1,
        childPassengers: 0,
      },
    }),
    [commonInitialValues],
  );

  return useMemo(
    () => (context.type === 'tour' ? tourInitialValues : transferInitialValues),
    [context.type, tourInitialValues, transferInitialValues],
  );
}

export default useFormInitialValues;
