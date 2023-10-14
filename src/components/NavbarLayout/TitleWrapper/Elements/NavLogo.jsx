import Image from 'next/image';
import React from 'react';

import Link from '@material/Link';
import { styled } from '@mui/material';

const LogoLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({ display: 'flex', alignItems: 'center' }),
);

export default function NavLogo() {
  return (
    <LogoLink href="/">
      <Image
        src="/logo/emerald_logo_v2.png"
        alt="Emerald Taxi & Tour Logo"
        width={42}
        height={42}
        quality={100}
        blurDataURL
      />
    </LogoLink>
  );
}
