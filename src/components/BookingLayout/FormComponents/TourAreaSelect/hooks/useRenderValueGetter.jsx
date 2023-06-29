import Typography from '@mui/material/Typography';
import { useFormikContext } from 'formik';
import React from 'react';
import useSelectedItem from './useSelectedItem';
import useStepperData from '../../../StepperLayout/hooks/useStepperData';

export default function useRenderValueGetter() {
  const { values } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const selectedLabel = useSelectedItem(values[stepName]?.area);

  const renderValue = () => <Typography as="span">{selectedLabel}</Typography>;

  return renderValue;
}
