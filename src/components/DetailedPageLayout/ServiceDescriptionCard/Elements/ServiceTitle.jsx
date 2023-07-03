import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
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

function TransferTitle() {
  const {
    area: { airport },
  } = useContext(ParamContext);

  const name = useGetName();

  return (
    <>
      <CardTitle>Private Shuttle Service:</CardTitle>
      <CardTitle>
        {airport} - {name}
      </CardTitle>
    </>
  );
}

function TourTitle() {
  const params = useContext(ParamContext);

  return (
    <>
      <CardTitle>{params.name}</CardTitle>
      <CardTitle>Private Tour</CardTitle>
    </>
  );
}

export default function ServiceTitle() {
  const { type } = useContext(ParamContext);

  const dynamicTitle = type === 'transfer' ? <TransferTitle /> : <TourTitle />;

  return <>{dynamicTitle}</>;
}
