import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';
import BookingLayout from '@components/BookingLayout/BookingLayout';
import ImportantInfo from '../TourPageLayout/ImportantInfo';
import TransferDescription from './Elements/TransferDescription';
import TransferTitle from './Elements/TransferTitle';
import PageCard from '@elements/PageCard';

const transferStackStyles = { mt: 4 };

const DescriptionCard = styled(PageCard)(({ theme }) =>
  theme.unstable_sx({
    py: { xxs: 2, md: 4.5 },
    position: 'relative',
  }),
);

function TransferStack({ children, ...rest }) {
  return (
    <Stack
      spacing={2}
      sx={transferStackStyles}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default function TransferPageLayout() {
  return (
    <>
      <BookingLayout />
      <TransferStack>
        <DescriptionCard>
          <TransferTitle />
          <TransferDescription />
        </DescriptionCard>
        <ImportantInfo />
      </TransferStack>
    </>
  );
}
