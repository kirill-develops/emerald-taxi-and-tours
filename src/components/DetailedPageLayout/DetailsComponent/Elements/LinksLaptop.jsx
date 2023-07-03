import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Laptop, Launch, MailOutline, Phone, Place } from '@mui/icons-material';
import React, { useContext } from 'react';
import { PopUpLink, TelLink } from '@elements/Links';
import DetailDevider from './DetailDevider';
import { ParamContext } from '@Form/FormContextProvider';
import { detailTypographyProps } from '..';
import { styled } from '@mui/material';

const AddressText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({ display: 'flex', alignItems: 'center', gap: 0.5 }),
);

export default React.memo(function LinksLaptop() {
  const {
    tripAdvisorDetails: {
      address_obj: { address_string: addressString = '' } = {},
      email,
      phone,
      web_url: webUrl,
      website,
    },
  } = useContext(ParamContext);

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        divider={<DetailDevider />}
      >
        {website && (
          <PopUpLink href={website}>
            <Laptop fontSize="small" />
            Website
          </PopUpLink>
        )}
        {phone && (
          <TelLink href={phone}>
            <Phone fontSize="small" />
            {phone}
          </TelLink>
        )}
        {webUrl && (
          <PopUpLink href={webUrl}>
            <Launch fontSize="small" />
            TripAdvisor Page
          </PopUpLink>
        )}
        {email && (
          <TelLink href={email}>
            <MailOutline fontSize="small" />
            Email
          </TelLink>
        )}
      </Stack>
      <AddressText {...detailTypographyProps}>
        <Place fontSize="small" />
        {addressString}
      </AddressText>
    </>
  );
});
