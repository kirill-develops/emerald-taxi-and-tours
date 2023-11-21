import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const headerObjs = [
  { name: 'Region' },
  { name: '1-4 Guests', align: 'center' },
  { name: 'Extra Guest(s)', align: 'center' },
];

const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`&.${tableCellClasses.alignRight}`]: {},
}));

export default React.memo(function TableHeaders() {
  return (
    <TableHead>
      <TableRow>
        {headerObjs.map((header) => (
          <StyledHeaderTableCell
            align={header?.align}
            key={header.name}
            variant="head"
          >
            {header.name}
          </StyledHeaderTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
});
