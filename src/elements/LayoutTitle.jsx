import dynamic from 'next/dynamic';
const Divider = dynamic(() => import('@mui/material/Divider'));
const Typography = dynamic(() => import('@mui/material/Typography'));
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import SectionTitle from '@elements/SectionTitle';

function TitleEl({ children }) {
  const titleStyles = { mt: '0.35em', textTransform: 'uppercase' };

  return (
    <SectionTitle
      component="h1"
      color="primary.light"
      sx={titleStyles}
    >
      {children}
    </SectionTitle>
  );
}
export default function LayoutTitle({ title, subheader, airport }) {
  const subheaderColor =
    airport.length > 0 ? 'text.primary' : 'secondary.light';

  const subheaderEl = subheader.length > 0 && (
    <Typography
      variant="h4"
      component="h2"
      color={subheaderColor}
      sx={{ mb: '0.25em' }}
    >
      {subheader}
    </Typography>
  );

  const airportEl = airport.length > 0 && (
    <Typography
      variant="h5"
      component="h3"
      color="secondary.light"
      sx={{ mb: '0.25em' }}
    >
      {airport}
    </Typography>
  );

  if (title.length > 0)
    return (
      <>
        <MaxWidthContainer>
          <TitleEl>{title}</TitleEl>
          {subheaderEl}
          {airportEl}
        </MaxWidthContainer>
        <Divider
          variant="inset"
          sx={{
            borderColor: (theme) => theme.palette.secondary.dark,
          }}
        />
      </>
    );
}
