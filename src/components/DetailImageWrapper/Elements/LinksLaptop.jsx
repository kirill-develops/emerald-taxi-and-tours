import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Place } from '@mui/icons-material';
import React, { useContext } from 'react';
import DetailDevider from './DetailDevider';
import { ParamContext } from '@context/FormContextProvider';
import { detailTypographyProps } from '..';
import { styled } from '@mui/material/styles';
import usePageLinks from '../hooks/usePageLinks';

const AddressText = styled(Typography)(({ theme }) =>
  theme.unstable_sx({ display: 'flex', alignItems: 'center', gap: 0.5 }),
);

export default React.memo(function LinksLaptop() {
  const {
    tripAdvisorDetails: {
      address_obj: { address_string: addressString = '' } = {},
    } = {},
  } = useContext(ParamContext);

  const linksObj = usePageLinks();

  return (
    linksObj.length > 0 && (
      <>
        <Stack
          direction="row"
          spacing={2}
          divider={<DetailDevider />}
        >
          {linksObj.map(({ LinkEl, href, label, icon }) => (
            <LinkEl
              href={href}
              key={label}
              color="secondary.containerText"
            >
              {icon}
              {label}
            </LinkEl>
          ))}
        </Stack>
        <AddressText {...detailTypographyProps}>
          <Place fontSize="small" />
          {addressString}
        </AddressText>
      </>
    )
  );
});
