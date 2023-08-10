import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useContext, useState } from 'react';
import DarkModeContext from '@context/DarkModeContext';
import { capitalize } from '@helperFunctions';

const borderRadiusStyles = { borderRadius: 4 };

export default React.memo(function DarkModeSwitch(props) {
  const theme = useTheme();
  const context = useContext(DarkModeContext);

  const [isSpinning, setIsSpinning] = useState(false);

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
          minWidth: props.isTablet ? 'unset' : null,
          width: 'fit-content',
        }}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </ListItemIcon>
      {!props.isTablet ? (
        <ListItemText primary={`${capitalize(theme.palette.mode)} Mode`} />
      ) : null}
    </ListItemButton>
  );
});
