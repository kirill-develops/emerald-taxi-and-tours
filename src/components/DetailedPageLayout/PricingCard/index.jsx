import Divider from '@mui/material/Divider';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import CardTitle from '@elements/CardTitle';
import PricingText from './Elements/PricingText';

export default React.memo(function PricingCard({ sx }) {
  const { price } = useContext(ParamContext);

  if (Array.isArray(price)) {
    return null;
  }

  return (
    <PageCard sx={sx}>
      <CardTitle>Pricing</CardTitle>
      <Divider sx={{ my: 2 }} />
      <PricingText price={price} />
    </PageCard>
  );
});
