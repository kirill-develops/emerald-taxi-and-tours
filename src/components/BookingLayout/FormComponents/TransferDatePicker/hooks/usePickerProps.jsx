import dayjs from 'dayjs';
import { useFormikContext } from 'formik';

import { transferStartDate } from '@data/formInitValues';
import { capitalize } from '@helperFunctions';
import useStepperData from '../../../StepperLayout/hooks/useStepperData';
import usePickerCommonPropsGetter from '../../hooks/usePickerCommonPropsGetter';

const pickerViews = ['month', 'day', 'hours', 'minutes'];

export default function usePickerProps(valueName) {
  const { values } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const commonProps = usePickerCommonPropsGetter(valueName);

  const capitalizedType = capitalize(valueName);
  const isArrive = valueName === 'arrive';
  const required = isArrive ? 'departure' : 'arrival';

  const minDateTime =
    (isArrive && dayjs(transferStartDate)) ||
    (values[stepName]?.transferType === 'roundtrip' &&
      values[stepName]?.arrive &&
      dayjs(values[stepName]?.arrive)) ||
    null;

  const maxDateTime =
    (isArrive &&
      values[stepName]?.transferType === 'roundtrip' &&
      values[stepName]?.depart &&
      dayjs(values[stepName]?.depart)) ||
    null;

  return {
    ...commonProps,
    label: `${capitalizedType} Date & Time`,
    views: pickerViews,
    disabled: required === values[stepName]?.transferType,
    minDateTime: minDateTime,
    maxDateTime: maxDateTime,
    slotProps: {
      ...commonProps.slotProps,
      textField: {
        ...commonProps.slotProps.textField,
        required: required !== values[stepName]?.transferType,
      },
    },
  };
}
