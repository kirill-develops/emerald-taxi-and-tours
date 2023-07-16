import dynamic from 'next/dynamic';
const Typography = dynamic(() => import('@mui/material/Typography'));
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import SectionTitle from '@elements/SectionTitle';
import DividerRight from '@elements/DividerRight';

function TitleEl({ children }) {
  const titleStyles = { mt: '0.35em', textTransform: 'uppercase' };

  return (
    <SectionTitle
      component="h1"
      color="primary.light"
      disableGutters
      sx={titleStyles}
    >
      {children}
    </SectionTitle>
  );
}

export default function LayoutTitle({ title, subheader, airport }) {
  const isAirport = airport.length > 0;

  const subheaderColor = isAirport ? 'text.primary' : 'secondary.light';

  const subheaderMargin = !isAirport && { mb: '0.25em' };

  const subheaderEl = subheader.length > 0 && (
    <Typography
      variant="h5"
      component="h2"
      color={subheaderColor}
      sx={{ ...subheaderMargin }}
    >
      {subheader}
    </Typography>
  );

  const airportEl = airport.length > 0 && (
    <Typography
      variant="h6"
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
        <MaxWidthContainer rowGap={0}>
          <TitleEl>{title}</TitleEl>
          {subheaderEl}
          {airportEl}
        </MaxWidthContainer>
        <DividerRight />
      </>
    );
}
