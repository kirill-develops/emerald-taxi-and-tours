import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import React from 'react';

import { useTour } from '@state/useTour';

const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const tableCellStyles = {
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
};

const tableRowStyles = (filterStartLocation) => ({
  backgroundColor: (theme) =>
    filterStartLocation && `${theme.palette.secondary.dark} !important`,
  color: (theme) =>
    filterStartLocation && `${theme.palette.text.primary} !important`,
});

const tableContainerStyles = { maxWidth: 500 };

function StyledTableRowComponent({ name, parish, link, price }) {
  const [{ filterStartLocation }] = useTour();

  return (
    <StyledTableRow sx={tableRowStyles(filterStartLocation[link])}>
      <TableCell
        scope="row"
        sx={tableCellStyles}
      >
        {name}
      </TableCell>
      <TableCell
        align="center"
        sx={tableCellStyles}
      >
        {parish}
      </TableCell>
      <TableCell
        align="right"
        sx={tableCellStyles}
      >
        ${price}
      </TableCell>
    </StyledTableRow>
  );
}

function PriceTable({ pricesArr }) {
  return (
    <TableContainer
      sx={tableContainerStyles}
      component={Paper}
    >
      <Table
        size="small"
        aria-label="regional price table"
      >
        <caption>All prices in USD & include pickup and return</caption>
        <TableHead>
          <TableRow>
            <StyledHeaderTableCell>Region</StyledHeaderTableCell>
            <StyledHeaderTableCell align="center">Parish</StyledHeaderTableCell>
            <StyledHeaderTableCell align="right">Price</StyledHeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pricesArr.map(({ name, parish, link, price }) => (
            <StyledTableRowComponent
              key={link}
              name={name}
              parish={parish}
              link={link}
              price={price}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(PriceTable);
