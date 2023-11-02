import { styled } from '@mui/material/styles';
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
    color: theme.palette.primary.dark,
    textShadow: `-1px -1px 0 ${theme.palette.common.white}, 
                  1px -1px 0 ${theme.palette.common.white}, 
                  -1px  1px 0 ${theme.palette.common.white}, 
                  1px  1px 0 ${theme.palette.common.white}`,
  }),
);

const headerTextStyles = { textAlign: 'center', fontWeight: 700 };

function HeaderText({ children }) {
  return (
    <Typography
      variant="h4"
      sx={headerTextStyles}
    >
      {children}
    </Typography>
  );
}
