import { styled } from '@mui/material/styles';

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  lineHeight: '48px',
  listStyle: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  padding: '4px 16px',
  color: theme.palette.secondary.containerText,
  backgroundColor: theme.palette.secondary.container,
}));

export default GroupHeader;
