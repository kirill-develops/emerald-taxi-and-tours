import Typography from '@mui/material/Typography';
import React, { useCallback, useMemo } from 'react';
import useFieldPropGetter from './useFieldPropGetter';
import useRenderValueGetter from '../TourAreaSelect/hooks/useRenderValueGetter';

export default function useSelectPropGetter(valueName = '', inputLabel = '') {
  const fieldProps = useFieldPropGetter(valueName, inputLabel);

  const renderValue = useRenderValueGetter();

  const getRenderValue = useCallback(
    (selected) => <Typography as="span">{selected}</Typography>,
    [],
  );

  const renderValueProp = renderValue ?? getRenderValue;

  return useMemo(
    () => ({
      ...fieldProps,
      renderValue: renderValueProp,
    }),
    [fieldProps, renderValueProp],
  );
}
