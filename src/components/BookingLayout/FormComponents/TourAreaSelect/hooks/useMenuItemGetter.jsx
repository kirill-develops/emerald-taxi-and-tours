import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';

export default function useMenuItemGetter() {
  const context = useContext(ParamContext);

  const JSX = context?.price?.map(({ link, name, price }) => (
    <MenuItem
      value={link}
      key={link}
      sx={{ justifyContent: 'space-between' }}
    >
      <Typography as="span">{name}</Typography>
      <Typography as="span">${price}</Typography>
    </MenuItem>
  ));

  return JSX;
}
