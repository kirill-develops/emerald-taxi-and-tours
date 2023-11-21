import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {
  ExpressCheckoutElement,
  LinkAuthenticationElement,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { useFormikContext } from 'formik';
import React, { useContext, useMemo } from 'react';
import StripePayContext from '@context/StripePayContext';

const StyledPaymentElement = styled(PaymentElement)(({ theme }) =>
  theme.unstable_sx({ width: '100%' }),
);

function usePaymentElementOptions() {
  const { values: { personalDetails } = {} } = useFormikContext();

  return useMemo(
    () => ({
      layout: 'tabs',
      defaultValues: {
        billingDetails: {
          email: personalDetails?.email,
          name: personalDetails?.name,
          phone: personalDetails?.mobile,
        },
      },
    }),
    [personalDetails.email, personalDetails.name, personalDetails.mobile],
  );
}

const onExpressClick = ({ resolve }) => {
  const options = {
    emailRequired: true,
    phoneNumberRequired: true,
  };

  resolve(options);
};

export default React.memo(function FormPaymentDetails() {
  const { message } = useContext(StripePayContext);

  const paymentElementOptions = usePaymentElementOptions();

  return (
    <Stack
      gap={1}
      width={'inherit'}
    >
      <ExpressCheckoutElement onConfirm={onExpressClick} />
      <LinkAuthenticationElement id="link-authentication-element" />
      <StyledPaymentElement
        id="payment-element"
        options={paymentElementOptions}
      />
      {message && <Typography>{message}</Typography>}
    </Stack>
  );
});
