import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import useFieldPropGetter from './useFieldPropGetter';

export default function useSelectPropGetter(
  valueName = '',
  inputLabel = '',
  renderValue,
) {
  const fieldProps = useFieldPropGetter(valueName, inputLabel);

  const getRenderValue = (selected) => (
    <Typography as="span">{selected}</Typography>
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
