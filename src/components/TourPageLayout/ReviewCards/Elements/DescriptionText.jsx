import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ReviewContext } from '../ReviewCard';
import { Box, Divider } from '@mui/material';
import TextCollapse from '../../Description/Elements/TextCollapse';

export default function DescriptionText({ ...rest }) {
  const { text } = useContext(ReviewContext);

  return (
    <Box sx={{ paddingRight: { md: 10 } }}>
      <Typography
        variant="body1"
        {...rest}
      >
        <TextCollapse>{text}</TextCollapse>
      </Typography>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
}
