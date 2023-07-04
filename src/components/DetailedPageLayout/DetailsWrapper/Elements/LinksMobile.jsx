import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { styled } from '@mui/material/styles';
import React from 'react';
import usePageLinks from '../hooks/usePageLinks';

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) =>
  theme.unstable_sx({
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: 66,
  }),
);

export default function LinksMobile() {
  const linksObj = usePageLinks();

  return (
    <StyledBottomNavigation showLabels>
      {linksObj.map(({ LinkEl, href, label, label2, icon }) => (
        <BottomNavigationAction
          key={label}
          label={label2 ?? label}
          icon={icon}
          href={href}
          LinkComponent={LinkEl}
        />
      ))}
    </StyledBottomNavigation>
  );
}
