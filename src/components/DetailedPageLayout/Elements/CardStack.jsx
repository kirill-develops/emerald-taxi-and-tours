import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';

const overflowStyles = { overflowX: 'scroll' };

const stackStyles = (theme, isBreakpoint = false) => ({
  minWidth: () => {
    const halfDifference =
      (theme.breakpoints.values.lg - theme.breakpoints.values.md) / 10;

    const minWidth = theme.breakpoints.values.md + halfDifference;

    return isBreakpoint ? '' : minWidth;
  },
});

export default function CardStack({ children, isBreakpoint, ...rest }) {
  return (
    <Box sx={overflowStyles}>
      <Stack
        direction={isBreakpoint ? 'column' : 'row'}
        flexWrap={true}
        spacing={2}
        alignItems="flex-start"
        sx={(theme) => stackStyles(theme, isBreakpoint)}
        {...rest}
      >
        {children}
      </Stack>
    </Box>
  );
}
