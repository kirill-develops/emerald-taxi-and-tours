import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import PageCard from '@elements/PageCard';
import StyledTableRowComponent from './Elements/StyledTableRowComponent';
import { ParamContext } from '@context/FormContextProvider';
import TableHeaders from './Elements/TableHeaders';

const tableContainerStyles = {
  maxWidth: 500,
  width: '100%',
  overflowX: 'unset',
};

export default React.memo(function PriceTable() {
  const { starting_points: startingPoints } = useContext(ParamContext);

  if (!startingPoints?.length) {
    return;
  }

  return (
    <PageCard>
      <TableContainer sx={tableContainerStyles}>
        <StyledTable>
          <Caption>All prices in USD & include pickup and return</Caption>
          <TableHeaders />
          <TableBody>
            {startingPoints?.map(({ name, link, basePrice, plusOnePrice }) => (
              <StyledTableRowComponent
                name={name}
                basePrice={basePrice.value}
                plusOnePrice={plusOnePrice.value}
                key={link}
              />
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </PageCard>
  );
});

function StyledTable({ children }) {
  return (
    <Table
      size="small"
      aria-label="regional price table"
    >
      {children}
    </Table>
  );
}

function Caption({ children }) {
  return (
    <Typography
      variant="caption"
      component="caption"
    >
      {children}
    </Typography>
  );
}
