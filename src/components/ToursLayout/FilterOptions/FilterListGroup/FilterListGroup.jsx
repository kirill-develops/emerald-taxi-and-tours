import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useTour } from '../../hooks/useTour';
import ExpandMoreWrapper from '@elements/ExpandMore';
import useFilterOptionsList from './Elements/FilterOptionsList';

const StyledListItemButton = styled(ListItemButton)(({ theme }) =>
  theme.unstable_sx({ borderRadius: 16 }),
);

const StyledListItemText = styled((props) => (
  <ListItemText
    primaryTypographyProps={{ variant: 'cardCaption' }}
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ my: 0 }));

const StyledExpandMoreWrapper = styled((props) => (
  <ExpandMoreWrapper
    disableRipple
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ p: 0 }));

const StyledCollapse = styled((props) => (
  <Collapse
    unmountOnExit
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));

const StyledList = styled((props) => (
  <List
    component="div"
    disablePadding
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));

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
      <StyledListItemButton
        onClick={() => toggleFilterOptionsCollapse(filterState)}
      >
        <StyledListItemText primary={headerString} />
        <StyledExpandMoreWrapper expand={filterOptionsCollapse[filterState]}>
          <ExpandMore />
        </StyledExpandMoreWrapper>
      </StyledListItemButton>
      <StyledCollapse in={filterOptionsCollapse[filterState]}>
        <StyledList>{filterOptionsListJSX}</StyledList>
      </StyledCollapse>
    </>
  );
}
