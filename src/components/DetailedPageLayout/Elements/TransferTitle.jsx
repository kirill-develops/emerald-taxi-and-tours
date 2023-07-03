import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import { Box } from '@mui/material';
import CardTitle from '@elements/CardTitle';

const allOtherString = 'All Other Resorts, Villas, AirBnB & Homes';

function useGetName() {
  const params = useContext(ParamContext);
  const { airportLink, name: areaName } = params.area;

  return useMemo(
    () =>
      params.name === allOtherString
        ? `Accomodations in ${areaName}`
        : airportLink === 'MBJ'
        ? params.name
        : `Accomodations in ${params.name}`,
    [params, airportLink, areaName],
  );
}

export default function TransferTitle() {
  const {
    area: { airport },
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
