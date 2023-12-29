import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useTour } from '../../../layouts/ToursLayout/hooks/useTour';
import ListOfOptions from './ListOfOptions';
import StyledListOfOptionGroups from './Elements/StyledElements';

export default function ListOfOptionGroups({
  filterState,
  optionKey,
  headerString,
}) {
  const [{ filterOptionsCollapse }, { toggleFilterOptionsCollapse }] =
    useTour();

  return (
    <>
      <StyledListOfOptionGroups.ItemButton
        onClick={() => toggleFilterOptionsCollapse(filterState)}
      >
        <StyledListOfOptionGroups.ItemText primary={headerString} />
        <StyledListOfOptionGroups.ExpandMoreWrapper
          expand={filterOptionsCollapse[filterState]}
        >
          <ExpandMore />
        </StyledListOfOptionGroups.ExpandMoreWrapper>
      </StyledListOfOptionGroups.ItemButton>
      <StyledListOfOptionGroups.Collapse
        in={filterOptionsCollapse[filterState]}
      >
        <StyledListOfOptionGroups.List>
          <ListOfOptions
            filterState={filterState}
            optionKey={optionKey}
          />
        </StyledListOfOptionGroups.List>
      </StyledListOfOptionGroups.Collapse>
    </>
  );
}
