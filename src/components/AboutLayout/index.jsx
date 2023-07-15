import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import PageCard from '@elements/PageCard';
import Summary from './elements/Summary';
import AboutImage from './elements/AboutImage';
import PageLayoutStack from '@elements/PageLayoutStack';

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
    <PageLayoutStack>
      <AboutCard>
        <FormInputStack>
          <AboutImage />
          <Summary />
        </FormInputStack>
      </AboutCard>
    </PageLayoutStack>
  );
});
