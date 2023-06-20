import Typography from '@mui/material/Typography';
import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import { Box } from '@mui/material';

const headerStyles = { fontWeight: 700 };

const allOtherString = 'All Other Resorts, Villas, AirBnB & Homes';

function useGetName() {
  const { areaParams, transferParams } = useContext(ParamContext);
  const { airport, airportLink, name: areaName } = areaParams;

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
  const { areaParams } = useContext(ParamContext);
  const { airport } = areaParams;

  const name = useGetName();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={headerStyles}
      >
        Private Shuttle Service:
      </Typography>
      <Typography
        variant="h4"
        sx={{ ...headerStyles }}
      >
        {airport} - {name}
      </Typography>
    </Box>
  );
}
