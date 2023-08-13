import { FlagIcon } from 'react-flag-kit';
import { styled } from '@mui/material/styles';
import { countries } from '@Data/countries';

export const StyledFlagIcon = styled(FlagIcon)(({ theme }) =>
  theme.unstable_sx({
    my: 'auto',
    mr: theme.spacing(1),
  }),
);

export function MuiFlagIcon({ selected }) {
  return (
    <StyledFlagIcon
      code={selected}
      alt={`${countries[selected]?.region} flag`}
      sx={{ height: 18 }}
    />
  );
}
