import React, { useContext } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import Typography from '@mui/material/Typography';
import PageCard from '@elements/PageCard';
import Divider from '@mui/material/Divider';
import TextCollapse from './Elements/TextCollapse';
import { styled } from '@mui/material';

const DescriptionCard = styled(PageCard)(({ theme }) =>
  theme.unstable_sx({
    py: { xxs: 2, md: 4.5 },
    position: 'relative',
  }),
);

export default React.memo(function Description() {
  const {
    tripAdvisorDetails: { description },
  } = useContext(ParamContext);

  return (
    description && (
      <DescriptionCard>
        <Typography variant="h5">Description</Typography>
        <Divider sx={{ my: 2 }} />
        <TextCollapse>{description}</TextCollapse>
      </DescriptionCard>
    )
  );
});
