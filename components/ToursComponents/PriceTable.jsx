import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useTour } from '../../state/useTour';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function PriceTable({ pricesArr }) {
  const [state, setState] = useTour();
  const { filterStartLocation } = state;

  return (
    <TableContainer sx={{ maxWidth: 500 }}>
      <Table
        size="small"
        aria-label="regional price table"
      >
        <caption>All prices in USD & include pickup and return</caption>
        <TableHead>
          <TableRow>
            <TableCell>Region</TableCell>
            <TableCell align="center">Parish</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pricesArr.map(({ name, parish, link, price }) => (
            <StyledTableRow
              key={link}
              sx={{
                backgroundColor:
                  filterStartLocation[link] && 'orange !important',
              }}
            >
              <TableCell
                component="th"
                scope="row"
              >
                {name}
              </TableCell>
              <TableCell align="center">{parish}</TableCell>
              <TableCell align="right">${price}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PriceTable;
