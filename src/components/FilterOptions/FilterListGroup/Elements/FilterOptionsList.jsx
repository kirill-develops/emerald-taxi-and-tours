import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { extractProps } from '@data/controllers/tour';
import { useTour } from '../../../../layouts/ToursLayout/hooks/useTour';

const getCheckboxInputProps = (label) => ({ 'aria-label': label });

const StyledListItem = styled((props) => (
  <ListItem
    disablePadding
    dense
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) =>
  theme.unstable_sx({ borderRadius: 16 }),
);

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) =>
  theme.unstable_sx({ minWidth: theme.spacing(5) }),
);

const StyledCheckbox = styled((props) => (
  <Checkbox
    size="small"
    color="secondary"
    disableRipple
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ p: 0 }));

const StyledListItemText = styled((props) => (
  <ListItemText
    primaryTypographyProps={{ variant: 'smallBold' }}
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));

export default function useFilterOptionsList({ filterState, optionKey }) {
  const [state, { toggleCheckbox, findAvailableFilters }] = useTour();

  const filterOptions = extractProps(optionKey);
  const availableFilters = findAvailableFilters(filterOptions);

  return filterOptions.map((item) => {
    const label = item?.name ?? item;
    const ariaProp = getCheckboxInputProps(label);

    const link = typeof item?.link === 'string' ? item.link : item;
    const handleCheckboxToggle = () => toggleCheckbox(filterState, link);

    return (
      <StyledListItem key={link}>
        <StyledListItemButton onClick={handleCheckboxToggle}>
          <StyledListItemIcon>
            <StyledCheckbox
              inputProps={ariaProp}
              checked={state[filterState][link]}
              disabled={!availableFilters[link]}
            />
          </StyledListItemIcon>
          <StyledListItemText primary={label} />
        </StyledListItemButton>
      </StyledListItem>
    );
  });
}
