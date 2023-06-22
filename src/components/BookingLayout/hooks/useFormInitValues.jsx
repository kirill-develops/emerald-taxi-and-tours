import { ParamContext } from '@Form/FormContextProvider';
import { useContext, useMemo } from 'react';
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
      areaParams: { link: areaLink, name: areaName },
      transferParams: { link: transferLink, name: transferName },
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

  const transferInitialValues = getTransferInitialValues(accomName);

  const { type } = useContext(ParamContext);

  return useMemo(
    () => (type === 'tour' ? tourInitialValues : transferInitialValues),
    [type, transferInitialValues],
  );
}
