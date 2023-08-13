import { styled } from '@mui/material/styles';

export const GroupItems = styled('ul')(({ theme }) => ({
  padding: 0,
  fontSize: '0.925rem',
  ...theme.typography.cardCaption,
}));

export default GroupItems;
