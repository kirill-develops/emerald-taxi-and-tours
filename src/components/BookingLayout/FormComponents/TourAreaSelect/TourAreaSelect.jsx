import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React from 'react';
import FormHelperTextEl from '../Elements/FormHelperTextEl';
import useSelectPropGetter from '../hooks/useSelectPropGetter';
import useMenuItemGetter from './hooks/useMenuItemGetter';
import useRenderValueGetter from './hooks/useRenderValueGetter';
import FormControlEl from '../Elements/FormControlEl';

export default React.memo(function TourAreaSelect({}) {
  const inputLabel = 'Pickup: Area';

  const valueName = 'area';

  const menuItemsJSX = useMenuItemGetter();

  const renderValue = useRenderValueGetter();

  const areaSelectProps = useSelectPropGetter(
    valueName,
    inputLabel,
    renderValue,
  );

  return (
    <FormControlEl
      fullWidth
      margin="normal"
      valueName={valueName}
    >
      <InputLabel>{inputLabel}</InputLabel>
      <Select {...areaSelectProps}>{menuItemsJSX}</Select>
      <FormHelperTextEl valueName={valueName} />
    </FormControlEl>
  );
});
