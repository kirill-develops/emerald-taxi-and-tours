import { useContext, useMemo } from 'react';
import FormFlightDetails from '@Form/FormFlightDetails';
import FormTourDetails from '@Form/FormTourDetails';
import FormPersonalDetails from '@Form/FormPersonalDetails';
import FormPaymentDetails from '@Form/FormPaymentDetails';
import FormConfirmDetails from '@Form/FormConfirmDetails';
import { ParamContext } from '@Form/FormContextProvider';
import useDataByKey from '@hooks/useDataByKey';

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

export default function useStepperData(bookingStep = 0) {
  const context = useContext(ParamContext);

  const stepsDataByType = useMemo(
    () => (context.type === 'transfer' ? transferSteps : tourSteps),
    [context.type],
  );

  const { component: activeStepComponent, link: activeStepUrl } = useMemo(
    () => stepsDataByType[bookingStep],
    [bookingStep, stepsDataByType],
  );

  const stepperLength = useMemo(
    () => stepsDataByType.length - 1,
    [stepsDataByType],
  );

  const stepperLabels = useDataByKey('label', stepsDataByType);

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
