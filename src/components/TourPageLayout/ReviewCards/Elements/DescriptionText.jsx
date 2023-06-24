import React, { useContext } from 'react';
import { ReviewContext } from '../ReviewCard';
import { Box, Divider } from '@mui/material';
import TextCollapse from '../../Description/Elements/TextCollapse';

export default function DescriptionText({ ...rest }) {
  const { text } = useContext(ReviewContext);

  return (
    <Box sx={{ paddingRight: { md: 10 } }}>
      <TextCollapse>{text}</TextCollapse>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
}
