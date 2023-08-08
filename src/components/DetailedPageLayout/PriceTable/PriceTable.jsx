import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useContext } from 'react';
import PageCard from '@elements/PageCard';
import StyledTableRowComponent from './Elements/StyledTableRowComponent';
import { ParamContext } from '@context/FormContextProvider';

const StyledHeaderTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const tableContainerStyles = {
  maxWidth: 500,
  width: '100%',
  overflowX: 'unset',
};

const headerObjs = [
  { name: 'Region' },
  { name: 'Parish', align: 'center' },
  { name: 'Price', align: 'right' },
];

export default React.memo(function PriceTable() {
  const { price } = useContext(ParamContext);
  return price?.length ? (
    <PageCard>
      <TableContainer sx={tableContainerStyles}>
        <Table
          size="small"
          aria-label="regional price table"
        >
          <caption>All prices in USD & include pickup and return</caption>
          <TableHead>
            <TableRow>
              {headerObjs.map((header) => (
                <StyledHeaderTableCell
                  align={header?.align}
                  key={header.name}
                >
                  {header.name}
                </StyledHeaderTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {price?.map(({ name, parish, link, price }) => (
              <StyledTableRowComponent
                name={name}
                parish={parish}
                price={price}
                key={link}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageCard>
  ) : null;
});
