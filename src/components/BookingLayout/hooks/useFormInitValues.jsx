import { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import {
  getTransferInitialValues,
  tourInitialValues,
} from '@data/formInitValues';

export function useAccomName() {
  const paramContext = useContext(ParamContext);

  return useMemo(() => {
    if (paramContext.type === 'tour') {
      return '';
    }

    const {
      area: { link: areaLink, name: areaName },
      link: transferLink,
      name: transferName,
    } = paramContext;

    if (transferLink !== 'other' && areaLink !== 'other_areas') {
      return `${transferName} in ${areaName}`;
    } else {
      return '';
    }
  }, [paramContext]);
}

export default function useFormInitValues() {
  const accomName = useAccomName();
  const { type } = useContext(ParamContext);

  const transferInitialValues = useMemo(
    () => getTransferInitialValues(accomName),
    [accomName],
  );

  return useMemo(
    () => (type === 'tour' ? tourInitialValues : transferInitialValues),
    [type, transferInitialValues],
  );
}
