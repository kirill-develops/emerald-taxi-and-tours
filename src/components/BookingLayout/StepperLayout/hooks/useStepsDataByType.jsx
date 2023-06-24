import { useFormikContext } from 'formik';
import { useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import { tourSteps, transferSteps } from '../data/stepsData';

export default function useStepsDataByType() {
  const {
    values: { bookingStep },
  } = useFormikContext();

  const context = useContext(ParamContext);

  const stepsDataByType = useMemo(
    () => (context.type === 'transfer' ? transferSteps : tourSteps),
    [context.type],
  );

  return { stepsDataByType, bookingStep };
}
