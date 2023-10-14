import { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import {
  tourSteps,
  transferSteps,
} from '../components/DetailedPageLayout/BookingLayout/StepperLayout/data/stepsData';

export default function useStepData() {
  const { type } = useContext(ParamContext);

  const stepsData = useMemo(
    () => (type === 'transfer' ? transferSteps : tourSteps),
    [type],
  );

  return stepsData;
}
