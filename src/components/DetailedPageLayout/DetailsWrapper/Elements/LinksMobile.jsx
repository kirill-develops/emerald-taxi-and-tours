import React from 'react';
import usePageLinks from '../hooks/usePageLinks';
import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
} from '@mui/material';

export default function LinksMobile() {
  const linksObj = usePageLinks();
  const isXxs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  return (
    <BottomNavigation showLabels>
      {linksObj.map(({ LinkEl, href, label, label2, icon }) => (
        <BottomNavigationAction
          key={label}
          label={label2 ?? label}
          icon={icon}
          href={href}
          LinkComponent={LinkEl}
        />
      ))}
    </BottomNavigation>
  );
}
