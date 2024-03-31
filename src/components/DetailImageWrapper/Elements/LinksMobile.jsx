import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { styled } from '@mui/material/styles';
import React from 'react';
import usePageLinks from '../hooks/usePageLinks';

const contrastTextStyles = {
  color: (theme) => theme.palette.secondary.contrastText,
};

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) =>
  theme.unstable_sx({
    ...contrastTextStyles,
    backgroundColor: (theme) => theme.palette.secondary.main,
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: 66,
  }),
);

export default React.memo(function LinksMobile() {
  const linksObj = usePageLinks();

  if (!linksObj || linksObj.length < 1) {
    return null;
  }

  return (
    linksObj?.length > 0 && (
      <StyledBottomNavigation showLabels>
        {linksObj.map(({ LinkEl, href, label, label2, icon }) => (
          <BottomNavigationAction
            key={label}
            label={label2 ?? label}
            icon={icon}
            href={href}
            LinkComponent={LinkEl}
            sx={contrastTextStyles}
          />
        ))}
      </StyledBottomNavigation>
    )
  );
});
