import { useMemo } from 'react';

export default function useDataByKey(keys, data) {
  return useMemo(() => {
    const keyArray = Array.isArray(keys) ? keys : [keys];

    return data.map((dataItem) =>
      keyArray.reduce((accumulator, key) => {
        const value = dataItem[key];

        return {
          ...accumulator,
          [key]: value?.toString ? value.toString() : value,
        };
      }, {}),
    );
  }, [keys, data]);
}
