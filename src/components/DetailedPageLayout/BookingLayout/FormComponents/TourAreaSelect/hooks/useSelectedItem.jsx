import { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';

export default function useSelectedItem(selected) {
  const context = useContext(ParamContext);

  return useMemo(
    () =>
      context?.tourParams?.price?.find((obj) => obj.link === selected)?.name,
    [selected, context?.tourParams?.price],
  );
}
