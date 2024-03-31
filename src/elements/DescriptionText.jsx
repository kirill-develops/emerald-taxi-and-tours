import React, { useContext } from 'react';
import ReviewContext from '@context/ReviewContext';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextCollapse from '@elements/TextCollapse';

export default function DescriptionText({ ...rest }) {
  const { text } = useContext(ReviewContext);

  return (
    <Box sx={{ paddingRight: { md: 10 } }}>
      <TextCollapse>{text}</TextCollapse>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
}
