import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const FooterText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    variant: 'body2',
    color: 'text.secondary',
    textAlign: 'center',
  }),
);

const FooterContainer = styled(Container)(({ theme }) =>
  theme.unstable_sx({ overflow: 'auto', my: '1em' }),
);

export default function Copyright() {
  return (
    <FooterContainer component="footer">
      <FooterText>Established 2021</FooterText>
      <FooterText>
        {'Copyright © '}
        Emeral Taxi & Tour {new Date().getFullYear()}.
      </FooterText>
    </FooterContainer>
  );
}
