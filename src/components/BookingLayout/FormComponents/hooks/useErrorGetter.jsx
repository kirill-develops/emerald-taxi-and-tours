import { useFormikContext } from 'formik';
import useStepperData from '../../StepperLayout/hooks/useStepperData';

export default function useErrorGetter(valueName) {
  const { touched, errors } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  return (
    touched[stepName]?.[valueName] && Boolean(errors[stepName]?.[valueName])
  );
}
