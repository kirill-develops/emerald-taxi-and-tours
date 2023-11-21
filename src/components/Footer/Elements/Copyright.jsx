import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

const footerTextStyles = { textAlign: 'center' };

function FooterText({ children, sx, ...rest }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={footerTextStyles}
      {...rest}
    >
      {children}
    </Typography>
  );
}

export default function Copyright() {
  return (
    <Box>
      <FooterText>Established 2021</FooterText>
      <FooterText>
        {'Copyright © '}
        Emeral Taxi & Tour {new Date().getFullYear()}.
      </FooterText>
    </Box>
  );
}
