import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import { Box } from '@mui/material';
import CardTitle from '@elements/CardTitle';

const allOtherString = 'All Other Resorts, Villas, AirBnB & Homes';

function useGetName() {
  const { areaParams, transferParams } = useContext(ParamContext);
  const { airportLink, name: areaName } = areaParams;

  return useMemo(
    () =>
      transferParams.name === allOtherString
        ? `Accomodations in ${areaName}`
        : airportLink === 'MBJ'
        ? transferParams.name
        : `Accomodations in ${transferParams.name}`,
    [transferParams, airportLink, areaName],
  );
}

export default function TransferTitle() {
  const {
    areaParams: { airport },
  } = useContext(ParamContext);

  const name = useGetName();

  return (
    <Box>
      <CardTitle>Private Shuttle Service:</CardTitle>
      <CardTitle>
        {airport} - {name}
      </CardTitle>
    </Box>
  );
}
