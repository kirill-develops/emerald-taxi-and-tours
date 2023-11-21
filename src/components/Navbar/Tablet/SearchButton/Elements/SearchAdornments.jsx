import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';

export function SearchStartAdornment({ color }) {
  const styles = { color: color };
  return (
    <InputAdornment
      position="start"
      sx={styles}
    >
      <Search />
    </InputAdornment>
  );
}

export function SearchEndAdornment({
  color = (theme) => theme.palette.text.secondary,
}) {
  const styles = {
    height: 18,
    borderRadius: 2,
    color: color,
  };

  return (
    <InputAdornment position="end">
      <Chip
        label="⌘K"
        variant="outlined"
        size="small"
        sx={styles}
      />
    </InputAdornment>
  );
}
