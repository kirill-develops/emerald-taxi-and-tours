import { useTheme } from '@mui/material';
import { useMemo } from 'react';

export default function useStripeElementsOptionsGetter(clientSecret) {
  const theme = useTheme();

  const appearance = useMemo(
    () => ({
      theme: 'stripe',
      variables: {
        colorPrimary: theme.palette.primary.main,
        colorBackground: theme.palette.background.variant,
        colorText: theme.palette.background.variantText,
        colorDanger: theme.palette.error.main,
        colorSuccess: theme.palette.success.main,
        colorWarning: theme.palette.warning.main,
      },
    }),
    [theme.palette],
  );

  const stripeOptions = useMemo(
    () => ({
      paymentMethodCreation: 'manual',
      clientSecret,
    }),
    [clientSecret],
  );

  const options = useMemo(
    () => ({ ...stripeOptions, appearance }),
    [stripeOptions, appearance],
  );

  return options;
}
