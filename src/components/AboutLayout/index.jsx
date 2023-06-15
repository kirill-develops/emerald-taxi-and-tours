import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import PageCard from '@elements/PageCard';
import Summary from './elements/Summary';
import AboutImage from './elements/AboutImage';
import { styled } from '@mui/material/styles';

const AboutStack = styled(FormInputStack)(({ theme }) =>
  theme.unstable_sx({ columnGap: 0, rowGap: 0 }),
);

const AboutCard = React.memo(function AboutCard(props) {
  return (
    <PageCard
      variant="outlined"
      sx={{ height: '100%', mb: 5 }}
      {...props}
    />
  );
});

export default React.memo(function AboutLayout() {
  return (
    <AboutStack component={AboutCard}>
      <AboutImage />
      <Summary />
    </AboutStack>
  );
});
