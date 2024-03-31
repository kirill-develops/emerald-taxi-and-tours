import Image from 'next/image';
import React from 'react';
import { styled } from '@mui/material/styles';

import Link from '@material/Link';
import navLogo from '@../public/logo/emerald_logo_v2.PNG';

const LogoLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({ display: 'flex', alignItems: 'center' }),
);

export default function NavLogo() {
  return (
    <LogoLink href="/">
      <Image
        src={navLogo}
        alt="Emerald Taxi & Tour Logo"
        width={42}
        height={42}
        quality={100}
        priority
      />
    </LogoLink>
  );
}
