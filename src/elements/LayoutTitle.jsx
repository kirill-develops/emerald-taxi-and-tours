import dynamic from 'next/dynamic';
const Divider = dynamic(() => import('@mui/material/Divider'));
const Typography = dynamic(() => import('@mui/material/Typography'));
import React from 'react';
import MaxWidthContainer from '@elements/MaxWidthContainer';

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
          <Typography
            variant="h2"
            component="h1"
            color="primary.light"
            sx={{
              mt: '0.35em',
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
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
