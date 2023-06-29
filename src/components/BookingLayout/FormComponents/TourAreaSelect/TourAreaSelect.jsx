import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from 'react';
import useErrorGetter from '../hooks/useErrorGetter';
import FormHelperTextEl from '../Elements/FormHelperTextEl';
import useFieldSizeGetter from '../hooks/useFieldSizeGetter';
import useSelectPropGetter from '../hooks/useSelectPropGetter';
import useMenuItemGetter from './hooks/useMenuItemGetter';
import useRenderValueGetter from './hooks/useRenderValueGetter';

export default React.memo(function TourAreaSelect({}) {
  const inputLabel = 'Pickup: Area';

  const menuItemsJSX = useMenuItemGetter();

  const renderValue = useRenderValueGetter();

  const areaSelectProps = useSelectPropGetter('area', inputLabel, renderValue);

  const fieldErrors = useErrorGetter('area');

  const size = useFieldSizeGetter();

  return (
    <FormControl
      fullWidth
      required
      error={fieldErrors}
      margin="normal"
      size={size}
    >
      <InputLabel>{inputLabel}</InputLabel>
      <Select {...areaSelectProps}>{menuItemsJSX}</Select>
      <FormHelperTextEl valueName="area" />
    </FormControl>
  );
});
