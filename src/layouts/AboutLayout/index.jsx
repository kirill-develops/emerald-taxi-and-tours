import React from 'react';
import FormInputStack from '@elements/FormInputStack';
import PageCard from '@elements/PageCard';
import Summary from './elements/Summary';
import AboutImage from './elements/AboutImage';
import PageLayoutStack from '@elements/PageLayoutStack';

const aboutCardStyles = {
  height: '100%',
  mb: 5,
  borderRight: 'none',
  borderLeft: 'none',
};

const AboutCard = React.memo(function AboutCard(props) {
  return (
    <PageCard
      variant="outlined"
      sx={aboutCardStyles}
      disableStack
      {...props}
    />
  );
});

function AboutStack({ children }) {
  return (
    <FormInputStack
      sx={{ m: 0 }}
      direction={{ xxs: 'column', md: 'row' }}
    >
      {children}
    </FormInputStack>
  );
}

export default React.memo(function AboutLayout() {
  return (
    <PageLayoutStack alignItems="center">
      <AboutCard>
        <AboutStack>
          <AboutImage />
          <Summary />
        </AboutStack>
      </AboutCard>
    </PageLayoutStack>
  );
});
