import { useFormikContext } from 'formik';
import { useContext } from 'react';
import { ParamContext } from '@components/FormComponents/FormContextProvider';
import {
  normanManleyTransferData,
  sangsterTransferData,
} from '@data/transfers';

function useTransferPrice() {
  const {
    areaParams: { airportLink, link: areaLink },
    transferParams: { link: transferLink },
  } = useContext(ParamContext);

  const { values } = useFormikContext();

  const transferData =
    airportLink === 'MBJ' ? sangsterTransferData : normanManleyTransferData;

  const { extraGuestOneWay, extraGuestTwoWay } = transferData
    .find((area) => area.link === areaLink)
    .destinations.find(
      (destination) => destination.link === transferLink,
    ).price;

  return values?.flightDetails?.transferType === 'roundtrip'
    ? extraGuestTwoWay
    : extraGuestOneWay;
}

export default useTransferPrice;
