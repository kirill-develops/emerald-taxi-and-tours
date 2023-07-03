import React, { useContext } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import PageCard from '@elements/PageCard';
import Divider from '@mui/material/Divider';
import TextCollapse from './Elements/TextCollapse';
import { styled } from '@mui/material';
import CardTitle from '@elements/CardTitle';

const DescriptionCard = styled(PageCard)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
  }),
);

export default React.memo(function LocationDescription() {
  const {
    tripAdvisorDetails: { description, name },
  } = useContext(ParamContext);

  return (
    description && (
      <DescriptionCard>
        <CardTitle>About</CardTitle>
        <Divider sx={{ my: 2 }} />
        <TextCollapse>{description}</TextCollapse>
      </DescriptionCard>
    )
  );
});
