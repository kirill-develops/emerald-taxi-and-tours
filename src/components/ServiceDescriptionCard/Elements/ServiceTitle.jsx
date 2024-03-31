import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import CardTitle from '@elements/CardTitle';

const allOtherString = 'All Other Resorts, Villas, AirBnB & Homes';

function CardSubtitle({ children }) {
  return (
    <CardTitle
      variant="subtitle1"
      sx={{
        color: (theme) => theme.palette.text.secondary,
      }}
    >
      {children}
    </CardTitle>
  );
}

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
      <CardTitle>
        {airport} - {name}
      </CardTitle>
      <CardSubtitle>Private Shuttle Service</CardSubtitle>
    </>
  );
}

function TourTitle() {
  const params = useContext(ParamContext);

  return (
    <>
      <CardTitle>{params.name}</CardTitle>
      <CardSubtitle>Private Tour</CardSubtitle>
    </>
  );
}

export default function ServiceTitle() {
  const { type } = useContext(ParamContext);

  const dynamicTitle = type === 'transfer' ? <TransferTitle /> : <TourTitle />;

  return <>{dynamicTitle}</>;
}
