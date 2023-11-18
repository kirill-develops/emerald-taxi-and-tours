import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useTour } from '../../hooks/useTour';
import ExpandMoreWrapper from '@elements/ExpandMore';
import useFilterOptionsList from './Elements/FilterOptionsList';

const listItemButtonStyles = { borderRadius: 16 };

export default function FilterListGroup({
  filterState,
  optionKey,
  headerString,
}) {
  const [{ filterOptionsCollapse }, { toggleFilterOptionsCollapse }] =
    useTour();

  const filterOptionsListJSX = useFilterOptionsList({
    filterState,
    optionKey,
  });

  return (
    <>
      <ListItemButton
        onClick={() => toggleFilterOptionsCollapse(filterState)}
        sx={listItemButtonStyles}
      >
        <ListItemText
          primary={headerString}
          primaryTypographyProps={{ variant: 'cardCaption' }}
          sx={{ my: 0 }}
        />
        <ExpandMoreWrapper
          expand={filterOptionsCollapse[filterState]}
          disableRipple
          sx={{ p: 0 }}
        >
          <ExpandMore />
        </ExpandMoreWrapper>
      </ListItemButton>
      <Collapse
        in={filterOptionsCollapse[filterState]}
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          {filterOptionsListJSX}
        </List>
      </Collapse>
    </>
  );
}
