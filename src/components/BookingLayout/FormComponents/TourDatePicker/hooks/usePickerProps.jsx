import dayjs from 'dayjs';
import { useFormikContext } from 'formik';
import { tourDate } from '@data/formInitValues';
import { capitalize } from '@helperFunctions';
import useStepperData from '../../../StepperLayout/hooks/useStepperData';
import usePickerCommonPropsGetter from '../../hooks/usePickerCommonPropsGetter';
import { useMemo } from 'react';

export default function usePickerProps(type) {
  const { setFieldTouched } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const commonProps = usePickerCommonPropsGetter(type);

  const isDate = type === 'date';

  const pickerViews = useMemo(
    () => (isDate ? ['month', 'day'] : ['hours', 'minutes']),
    [isDate],
  );
  const minKey = isDate ? 'minDate' : 'minTime';

  const capitalizedType = capitalize(type);

  return useMemo(
    () => ({
      ...commonProps,
      label: `Select Tour ${capitalizedType}`,
      views: pickerViews,
      minutesStep: 15,
      [minKey]: dayjs(tourDate),
      slotProps: {
        ...commonProps.slotProps,
        textField: {
          ...commonProps.slotProps.textField,
          onBlur: () => setFieldTouched(`${stepName}.date`, true, false),
          required: true,
        },
      },
    }),
    [
      commonProps,
      capitalizedType,
      pickerViews,
      minKey,
      setFieldTouched,
      stepName,
    ],
  );
}
