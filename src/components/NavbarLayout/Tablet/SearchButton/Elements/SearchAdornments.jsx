import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';

export function SearchStartAdornment() {
  return (
    <InputAdornment position="start">
      <Search />
    </InputAdornment>
  );
}

export function SearchEndAdornment() {
  return (
    <InputAdornment position="end">
      <Chip
        label="⌘K"
        variant="outlined"
        size="small"
        sx={{
          height: 18,
          borderRadius: 2,
          color: (theme) => theme.palette.text.secondary,
        }}
      />
    </InputAdornment>
  );
}
