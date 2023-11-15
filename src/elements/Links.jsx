import React from 'react';
import Link from '@material/Link';

const linkTypographyProps = {
  variant: 'subtitle2',
  display: 'flex',
  gap: 1,
};

export const PopUpLink = React.forwardRef(function PopUpLink(
  { href, children, ...others },
  ref,
) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      ref={ref}
      {...linkTypographyProps}
      {...others}
    >
      {children}
    </Link>
  );
});

export const TelLink = React.forwardRef(function TellLink(
  { href, children, ...others },
  ref,
) {
  return (
    <Link
      href={`tel:${href}`}
      target="_blank"
      ref={ref}
      {...linkTypographyProps}
      {...others}
    >
      {children}
    </Link>
  );
});

export const MailLink = React.forwardRef(function MailLink(
  { href, children, ...others },
  ref,
) {
  return (
    <Link
      href={`mailto:${href}`}
      target="_blank"
      ref={ref}
      {...linkTypographyProps}
      {...others}
    >
      {children}
    </Link>
  );
});
