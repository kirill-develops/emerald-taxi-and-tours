import MaxWidthContainer from '@elements/MaxWidthContainer';
import React from 'react';
import SectionTitle from '@elements/SectionTitle';

export default function TransferSectionTitle({ title, children, ...rest }) {
  return (
    <MaxWidthContainer>
      <SectionTitle {...rest}>{title || children}</SectionTitle>
    </MaxWidthContainer>
  );
}
