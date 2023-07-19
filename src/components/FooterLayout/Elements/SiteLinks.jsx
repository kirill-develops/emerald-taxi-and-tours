import Stack from '@mui/material/Stack';
import KeyboardReturn from '@mui/icons-material/KeyboardReturn';
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import Link from '@material/Link';
import sitePagesArr from '@data/sitePagesArr';
import { layoutGridSpacingProp } from '@elements/CustomGridEl';

const footerLinkStyles = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 0.5,
};

function FooterLink({ children, ...rest }) {
  return (
    <Link
      underline="hover"
      variant="subtitle2"
      sx={footerLinkStyles}
      {...rest}
    >
      {children}
    </Link>
  );
}

const iconStyles = {
  transform: 'scaleX(-1)',
  color: (theme) => theme.palette.text.primary,
};

function ReturnIcon() {
  return (
    <KeyboardReturn
      fontSize="small"
      sx={iconStyles}
    />
  );
}

export default function SiteLinks() {
  return (
    <MaxWidthContainer>
      <Stack
        direction={{ xxs: 'column', sm: 'row' }}
        gap={layoutGridSpacingProp}
        justifyContent={{ sm: 'space-evenly' }}
      >
        {sitePagesArr.map(({ link, name, nestedLinks }) => (
          <Stack key={link}>
            <FooterLink href={link}>{name}</FooterLink>
            {nestedLinks ? (
              <Stack>
                {nestedLinks?.map(({ name: nestedName, link: nestedLink }) => (
                  <FooterLink
                    href={`${link}${nestedLink}`}
                    key={nestedLink}
                  >
                    <ReturnIcon />
                    {nestedName}
                  </FooterLink>
                ))}
              </Stack>
            ) : (
              ''
            )}
          </Stack>
        ))}
      </Stack>
    </MaxWidthContainer>
  );
}
