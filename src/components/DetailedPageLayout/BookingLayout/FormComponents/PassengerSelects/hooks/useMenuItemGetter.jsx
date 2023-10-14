import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import useTransferPrice from '../../hooks/useTransferPrice';
import { useFormikContext } from 'formik';
import useStepperData from '../../../StepperLayout/hooks/useStepperData';

export default function useMenuItems(valueName) {
  const { type } = useContext(ParamContext);
  const { values } = useFormikContext();

  const { activeStepUrl: stepName } = useStepperData();

  const isChildPassengers = valueName === 'childPassengers';

  const passengers = isChildPassengers ? values[stepName]?.passengers : 20;

  const transferPrice = useTransferPrice();

  const menuItems = useMemo(() => [], []);

  for (let index = 0; index < passengers; index++) {
    const value = isChildPassengers ? index : index + 1;
    const price = isChildPassengers
      ? -transferPrice * value
      : transferPrice * (index - 3);

    const jsx = (
      <MenuItem
        value={value}
        key={index}
        sx={{ justifyContent: 'space-between' }}
      >
        <Typography as="span">{value}</Typography>
        <Typography as="span">
          {`${price >= 0 ? '+' : '-'}$${Math.abs(price)}`}
        </Typography>
      </MenuItem>
    );

    if (
      type === 'transfer' &&
      ((isChildPassengers && index < passengers - 3 && index !== 0) ||
        (!isChildPassengers && index >= 4))
    ) {
      menuItems.push(jsx);
    } else
      menuItems.push(
        <MenuItem
          value={value}
          key={index}
        >
          {value}
        </MenuItem>,
      );
  }

  return useMemo(() => menuItems, [menuItems]);
}
