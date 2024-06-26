import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import PageCard from '@elements/PageCard';
import Divider from '@mui/material/Divider';
import TextCollapse from '@elements/TextCollapse';
import { styled } from '@mui/material/styles';
import CardTitle from '@elements/CardTitle';

const DescriptionCard = styled(PageCard)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
  }),
);

export default React.memo(function LocationDescription() {
  const {
    tripAdvisorDetails: { tripAdvisorDescription, name } = {},
    description: localDescription,
  } = useContext(ParamContext);

  const hasDescription = tripAdvisorDescription ?? localDescription;

  return (
    hasDescription && (
      <DescriptionCard>
        <CardTitle>About</CardTitle>
        <Divider sx={{ my: 2 }} />
        <TextCollapse>{hasDescription}</TextCollapse>
      </DescriptionCard>
    )
  );
});
