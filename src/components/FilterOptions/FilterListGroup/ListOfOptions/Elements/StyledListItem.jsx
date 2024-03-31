import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const StyledListItem = styled((props) => (
  <ListItem
    disablePadding
    dense
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({ '&:hover': { textDecoration: 'underline' } }),
);

StyledListItem.Button = styled((props) => <ListItemButton {...props} />)(
  ({ theme }) =>
    theme.unstable_sx({
      borderRadius: 1,
      '&:hover': { backgroundColor: 'initial' },
    }),
);

StyledListItem.Icon = styled(ListItemIcon)(({ theme }) =>
  theme.unstable_sx({ minWidth: theme.spacing(5) }),
);

StyledListItem.Checkbox = styled((props) => (
  <Checkbox
    size="small"
    color="secondary"
    disableRipple
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ p: 0 }));

StyledListItem.Text = styled((props) => (
  <ListItemText
    primaryTypographyProps={{ variant: 'filterOption' }}
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));

export default StyledListItem;
