import React from 'react';
import PageCard from '@elements/PageCard';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import ServiceTitle from './Elements/ServiceTitle';
import ServiceDescription from './Elements/ServiceDescription';

const DescriptionCard = styled(PageCard)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
  }),
);

export default React.memo(function ServiceDescriptionCard() {
  return (
    <DescriptionCard>
      <ServiceTitle />
      <Divider sx={{ my: 2 }} />
      <ServiceDescription />
    </DescriptionCard>
  );
});
