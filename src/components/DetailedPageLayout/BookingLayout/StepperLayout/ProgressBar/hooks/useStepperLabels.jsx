import useDataByKey from '@hooks/useDataByKey';
import useStepsDataByType from '../../hooks/useStepsDataByType';

export default function useStepperLabels() {
  const { stepsDataByType } = useStepsDataByType();

  const stepperLabels = useDataByKey('label', stepsDataByType);

  return stepperLabels;
}
