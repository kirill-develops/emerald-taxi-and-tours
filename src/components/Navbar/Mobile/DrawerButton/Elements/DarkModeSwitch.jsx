import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import React, { useContext, useState } from 'react';
import DarkModeContext from '@context/DarkModeContext';
import { capitalize } from '@helperFunctions';

const borderRadiusStylesGetter = (isTablet) => ({
  borderRadius: 4,
  maxWidth: 'fit-content',
  px: isTablet ? '8px' : '16px',
});

export default React.memo(function DarkModeSwitch({ isTablet, ...props }) {
  const theme = useTheme();
  const context = useContext(DarkModeContext);

  const [isSpinning, setIsSpinning] = useState(false);

  const borderRadiusStyles = borderRadiusStylesGetter(isTablet);

  return (
    <ListItemButton
      sx={borderRadiusStyles}
      onClick={() => {
        setIsSpinning(true);
        context(); // Your context function
        setTimeout(() => {
          setIsSpinning(false);
        }, 300); // Set the same value as transition duration
      }}
      {...props}
    >
      <ListItemIcon
        sx={{
          transform: isSpinning ? 'rotateX(90deg)' : 'rotateX(0deg)',
          transition: 'transform 0.3s ease-in-out',
          minWidth: isTablet ? 'unset' : null,
        }}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </ListItemIcon>
      {!isTablet ? (
        <ListItemText
          primary={`${capitalize(
            theme.palette.mode === 'dark' ? 'light' : 'dark',
          )} Mode`}
        />
      ) : null}
    </ListItemButton>
  );
});
