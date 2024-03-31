import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) =>
  theme.unstable_sx({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
    },
  }),
);

export default React.memo(function StyledTableRowComponent({
  name,
  basePrice,
  plusOnePrice,
}) {
  return (
    <StyledTableRow>
      <StyledTableCell scope="row">{name}</StyledTableCell>
      <StyledTableCell align="center">${basePrice}</StyledTableCell>
      <StyledTableCell align="center">${plusOnePrice}</StyledTableCell>
    </StyledTableRow>
  );
});
