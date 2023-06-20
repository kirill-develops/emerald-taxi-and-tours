import Stack from '@mui/material/Stack';
import React from 'react';
import BookingLayout from '@components/BookingLayout/BookingLayout';
import ImportantInfo from '../TourPageLayout/ImportantInfo';
import TransferDescription from './Elements/TransferDescription';
import TransferTitle from './Elements/TransferTitle';

const transferStackStyles = { mt: 4 };

function TransferStack({ children, ...rest }) {
  return (
    <Stack
      spacing={2}
      sx={transferStackStyles}
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
        <TransferTitle />
        <TransferDescription />
        <ImportantInfo />
      </TransferStack>
    </>
  );
}
