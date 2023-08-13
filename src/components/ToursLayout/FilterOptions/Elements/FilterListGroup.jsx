import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import React, { useCallback, useState } from 'react';
import { useTour, extractProps } from '../../hooks/useTour';
import ExpandMoreWrapper from '@elements/ExpandMore';

const listItemButtonStyles = { borderRadius: 16 };

const getCheckboxInputProps = (label) => ({ 'aria-label': label });

export default function FilterListGroup({
  filterState,
  optionKey,
  headerString,
}) {
  const [state, actions] = useTour();
  const { toggleCheckbox, findAvailableFilters } = actions;

  const filterOptions = extractProps(optionKey);
  const availableFilters = findAvailableFilters(filterOptions);

  const [openCollapse, setOpenCollapse] = useState(false);

  const handleExpand = useCallback(() => {
    setOpenCollapse((prevState) => ({
      ...prevState,
      [filterState]: !prevState[filterState] ?? true,
    }));
  }, [filterState]);

  return (
    <>
      <ListItemButton
        onClick={() => handleExpand(filterState)}
        sx={listItemButtonStyles}
      >
        <ListItemText
          primary={headerString}
          primaryTypographyProps={{ variant: 'cardCaption' }}
          sx={{ my: 0 }}
        />
        <ExpandMoreWrapper
          expand={openCollapse[filterState]}
          disableRipple
          sx={{ p: 0 }}
        >
          <ExpandMore />
        </ExpandMoreWrapper>
      </ListItemButton>
      <Collapse
        in={openCollapse[filterState]}
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          {filterOptions.map((item) => {
            const label = item?.name ? item.name : item;

            const link = typeof item?.link === 'string' ? item.link : item;

            const ariaProp = getCheckboxInputProps(label);

            const handleCheckboxToggle = (value) =>
              toggleCheckbox(filterState, value);

            return (
              <ListItem
                key={link}
                disablePadding
                dense
              >
                <ListItemButton
                  onClick={() => handleCheckboxToggle(link)}
                  sx={listItemButtonStyles}
                >
                  <ListItemIcon>
                    <Checkbox
                      size="small"
                      color="primary"
                      inputProps={ariaProp}
                      checked={state[filterState][link]}
                      disabled={!availableFilters[link]}
                      disableRipple
                      sx={{ p: 0 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ variant: 'smallBold' }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
