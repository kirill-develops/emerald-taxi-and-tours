import { darken, lighten, styled } from '@mui/system';

const GroupHeader = styled('div')(({ theme }) => ({
  lineHeight: '48px',
  listStyle: 'none',
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: '0.875rem',
  padding: '4px 16px',
  position: 'sticky',
  top: '0',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.secondary.light, 0.85)
      : darken(theme.palette.secondary.main, 0.8),
}));

export default GroupHeader;
