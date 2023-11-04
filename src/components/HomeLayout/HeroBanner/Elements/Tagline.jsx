import { darken, lighten, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Tagline() {
  return (
    <TaglineStack>
      <HeaderText>Private Airport Transportation</HeaderText>
      <HeaderText>&</HeaderText>
      <HeaderText>Island Tours</HeaderText>
    </TaglineStack>
  );
}

const TaglineStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({
    color: darken(theme.palette.common.white, 0.1),
  }),
);

const headerTextStyles = {
  textAlign: 'center',
  fontWeight: 900,
  letterSpacing: -0.3,
};

const HeaderText = React.memo(function HeaderText({ children }) {
  return (
    <Typography
      variant="h4"
      sx={headerTextStyles}
    >
      {children}
    </Typography>
  );
});
