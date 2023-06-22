import { useContext, useMemo } from 'react';
import FormFlightDetails from '@Form/FormFlightDetails';
import FormTourDetails from '@Form/FormTourDetails';
import FormPersonalDetails from '@Form/FormPersonalDetails';
import FormPaymentDetails from '@Form/FormPaymentDetails';
import FormConfirmDetails from '@Form/FormConfirmDetails';
import { ParamContext } from '@Form/FormContextProvider';

export const transferSteps = [
  {
    label: 'Flight Details',
    link: 'flightDetails',
    component: <FormFlightDetails />,
  },
  {
    label: 'Personal Details',
    link: 'personalDetails',
    component: <FormPersonalDetails />,
  },
  {
    label: 'Payment Options',
    link: 'paymentDetails',
    component: <FormPaymentDetails />,
  },
  {
    label: 'Confirm',
    link: 'confirmDetails',
    component: <FormConfirmDetails />,
  },
];

export const tourSteps = [
  {
    label: 'Tour Details',
    link: 'tourDetails',
    component: <FormTourDetails />,
  },
  {
    label: 'Personal Details',
    link: 'personalDetails',
    component: <FormPersonalDetails />,
  },
  {
    label: 'Payment Options',
    link: 'paymentDetails',
    component: <FormPaymentDetails />,
  },
  {
    label: 'Confirm',
    link: 'confirmDetails',
    component: <FormConfirmDetails />,
  },
];

function useDataByKey(keys, data) {
  return useMemo(() => {
    const keyArray = Array.isArray(keys) ? keys : [keys];

    return data.map((dataItem) =>
      keyArray.reduce((accumulator, key) => {
        const value = dataItem[key];

        return {
          ...accumulator,
          [key]: value?.toString ? value.toString() : value,
        };
      }, {}),
    );
  }, [keys, data]);
}

export default function useStepperData(bookingStep = 0) {
  const context = useContext(ParamContext);

  const stepsData = useMemo(
    () => (context.type === 'transfer' ? transferSteps : tourSteps),
    [context.type],
  );

  const { component: activeStepComponent, link: activeStepUrl } = useMemo(
    () => stepsData[bookingStep],
    [bookingStep, stepsData],
  );

  const stepperLength = useMemo(() => stepsData.length - 1, [stepsData]);

  const stepperLabels = useDataByKey('label', stepsData);

  return useMemo(
    () => ({
      activeStepComponent,
      activeStepUrl,
      stepperLength,
      stepperLabels,
    }),
    [activeStepComponent, activeStepUrl, stepperLength, stepperLabels],
  );
}
