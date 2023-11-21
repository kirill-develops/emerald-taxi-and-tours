import { useFormikContext } from 'formik';
import React, { useMemo } from 'react';

export default function useBillingDetails() {
  const { values: { personalDetails } = {} } = useFormikContext();

  return useMemo(
    () => ({
      billing_details: {
        name: `${personalDetails?.firstName} ${personalDetails?.lastName}`,
        email: personalDetails?.email,
        phone: personalDetails?.mobile,
      },
    }),
    [personalDetails],
  );
}
