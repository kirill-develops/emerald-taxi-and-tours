import { useFormikContext } from 'formik';
import { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import { transferData } from '@data/transfers';

export default function useTransferPrice() {
  const { values } = useFormikContext();

  const {
    area: { link: areaLink } = {},
    link: transferLink,
    type,
  } = useContext(ParamContext);

  if (type === 'tour') return '';

  const { extraGuestOneWay, extraGuestTwoWay } = transferData
    .find((area) => area.link === areaLink)
    .destinations.find(
      (destination) => destination.link === transferLink,
    )?.price;

  return useMemo(
    () =>
      values?.flightDetails?.transferType === 'roundtrip'
        ? extraGuestTwoWay
        : extraGuestOneWay,
    [values, extraGuestOneWay, extraGuestTwoWay],
  );
}
