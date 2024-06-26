import { styled } from '@mui/material/styles';

export const GroupItems = styled('ul')(({ theme }) => ({
  padding: 0,
  width: '100%',
  fontSize: '0.925rem',
  ...theme.typography.cardCaption,
}));

export default GroupItems;
