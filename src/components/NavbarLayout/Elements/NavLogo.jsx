import Image from 'next/image';
import React from 'react';

import Link from '@material/Link';
import emeraldLogo from '@Public/logo/emerald_logo_v2.png';
import { styled } from '@mui/material';

const LogoLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({ display: 'flex', alignItems: 'center' }),
);

export default function NavLogo() {
  return (
    <LogoLink href="/">
      <Image
        src={emeraldLogo}
        alt="Emerald Taxi & Tour Logo"
        width={42}
        quality={100}
        blurDataURL
      />
    </LogoLink>
  );
}
