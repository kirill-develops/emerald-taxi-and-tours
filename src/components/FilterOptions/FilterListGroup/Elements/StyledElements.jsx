import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreWrapper from '@elements/ExpandMore';

export default function StyledListOfOptionGroups() {
  return null;
}

StyledListOfOptionGroups.List = styled((props) => (
  <List
    component="div"
    disablePadding
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));

StyledListOfOptionGroups.ItemButton = styled(ListItemButton)(({ theme }) =>
  theme.unstable_sx({ borderRadius: 1 }),
);

StyledListOfOptionGroups.ItemText = styled((props) => (
  <ListItemText
    primaryTypographyProps={{ variant: 'filterSubcategory' }}
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ my: 0 }));

StyledListOfOptionGroups.ExpandMoreWrapper = styled((props) => (
  <ExpandMoreWrapper
    disableRipple
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ p: 0 }));

StyledListOfOptionGroups.Collapse = styled((props) => (
  <Collapse
    unmountOnExit
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));
