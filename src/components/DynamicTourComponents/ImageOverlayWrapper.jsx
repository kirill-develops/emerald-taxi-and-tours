import { LocalSeeOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

function ImageOverlayWrapper({ children, photoCount, link }) {
  return (
    <Box sx={{ position: 'relative', marginY: 2, width: '100%' }}>
      {children}
      <IconButton
        disableRipple
        href={link}
        target="_blank"
        sx={{
          position: 'absolute',
          bottom: 3,
          left: 3,
          gap: 0.5,
          alignItems: 'flex-end',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        <LocalSeeOutlined fontSize="small" />
        <Typography variant="body2"> See All ({photoCount})</Typography>
      </IconButton>
    </Box>
  );
}

export default ImageOverlayWrapper;
