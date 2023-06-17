import React from 'react';
import Link from '@material/Link';

const linkTypographyProps = {
  variant: 'subtitle2',
  display: 'flex',
  gap: 1,
};

export function PopUpLink({ href, children, ...others }) {
  return (
    <Link
      href={href}
      target="_blank"
      {...linkTypographyProps}
      {...others}
    >
      {children}
    </Link>
  );
}

export function TelLink({ href, children, ...others }) {
  return (
    <Link
      href={`tel:${href}`}
      target="_blank"
      {...linkTypographyProps}
      {...others}
    >
      {children}
    </Link>
  );
}

export function MailLink({ href, children, ...others }) {
  return (
    <Link
      href={`mailto:${href}`}
      target="_blank"
      {...linkTypographyProps}
      {...others}
    >
      {children}
    </Link>
  );
}
