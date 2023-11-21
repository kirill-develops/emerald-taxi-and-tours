import { useFormikContext } from 'formik';
import { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import { transferData } from '@data/controllers/transfer';

export default function useTransferPrice() {
  const { values } = useFormikContext();

  const {
    area: { link: areaLink } = {},
    link: transferLink,
    type,
  } = useContext(ParamContext);

  if (type === 'tour') return '';

  const { extraGuestOneWay, extraGuestTwoWay } = transferData
    .filterByArea(areaLink)
    .destinations.find(
      (destination) => destination.link === transferLink,
    )?.price;

  return values?.flightDetails?.transferType === 'roundtrip'
    ? extraGuestTwoWay
    : extraGuestOneWay;
}
