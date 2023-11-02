import { lighten, styled } from '@mui/material/styles';
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
    color: lighten(theme.palette.common.mint, 0.125),
  }),
);

const headerTextStyles = { textAlign: 'center', fontWeight: 1000 };

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
