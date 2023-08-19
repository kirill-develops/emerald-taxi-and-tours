import { useFormikContext } from 'formik';
import { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import { tourSteps, transferSteps } from '../data/stepsData';

export default function useStepperData() {
  const {
    values: { bookingStep },
  } = useFormikContext();
  const { type } = useContext(ParamContext);

  const stepsData = useMemo(
    () => (type === 'transfer' ? transferSteps : tourSteps),
    [type],
  );

  const activeStepData = useMemo(
    () => stepsData[bookingStep],
    [stepsData, bookingStep],
  );

  const stepperLength = stepsData.length - 1;

  return useMemo(() => {
    const { link } = activeStepData;

    return {
      stepsData,
      bookingStep,
      activeStepData,
      activeStepUrl: link,
      stepperLength,
    };
  }, [activeStepData, bookingStep, stepsData, stepperLength]);
}
