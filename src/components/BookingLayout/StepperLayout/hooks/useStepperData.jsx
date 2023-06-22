import { useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import useDataByKey from '@hooks/useDataByKey';
import { tourSteps, transferSteps } from './data/stepsData';

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
