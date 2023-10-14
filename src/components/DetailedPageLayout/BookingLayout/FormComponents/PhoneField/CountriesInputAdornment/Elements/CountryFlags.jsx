import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { countries } from '@data/countries';
import { MuiFlagIcon } from './MuiFlagIcon';

export default function useCountryFlags() {
  return Object.values(countries)
    .sort((a, b) => a.region.localeCompare(b.region))
    .map(({ code, region }) => (
      <MenuItem
        key={code}
        value={code}
      >
        <MuiFlagIcon selected={code} />
        {region}
      </MenuItem>
    ));
}
