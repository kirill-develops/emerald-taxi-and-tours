import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Laptop, Launch, Phone } from '@mui/icons-material';
import React, { useContext } from 'react';
import { PopUpLink, TelLink } from '@elements/Links';
import DetailDevider from './DetailDevider';
import { ParamContext } from '@Form/FormContextProvider';
import { detailTypographyProps } from '..';

export default React.memo(function LinksLaptop() {
  const {
    tourParams: {
      tripAdvisorDetails: {
        address_obj: { address_string: addressString = '' } = {},
        phone,
        web_url: webUrl,
        website,
      },
    },
  } = useContext(ParamContext);

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        divider={<DetailDevider />}
      >
        <PopUpLink href={website}>
          <Laptop fontSize="small" />
          Website
        </PopUpLink>
        <TelLink href={`tel:${phone}`}>
          <Phone fontSize="small" />
          {phone}
        </TelLink>
        <PopUpLink href={webUrl}>
          <Launch fontSize="small" />
          TripAdvisor Page
        </PopUpLink>
      </Stack>
      <Typography {...detailTypographyProps}>{addressString}</Typography>
    </>
  );
});
