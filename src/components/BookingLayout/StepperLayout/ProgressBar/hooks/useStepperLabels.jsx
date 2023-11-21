import useDataByKey from '@hooks/useDataByKey';
import useStepperData from '../../hooks/useStepperData';

export default function useStepperLabels() {
  const { stepsData } = useStepperData();

  const stepperLabels = useDataByKey('label', stepsData);

  return stepperLabels;
}
