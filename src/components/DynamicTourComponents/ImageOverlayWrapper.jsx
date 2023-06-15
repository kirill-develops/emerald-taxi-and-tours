import { LocalSeeOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { PopUpLink } from '@elements/Links';
import MaxWidthContainer from '@elements/MaxWidthContainer';

const boxStyles = {
  position: 'relative',
  // marginX: { xs: -2, sm: -3, lg: 'unset' },
  marginY: 2,
};

const linkStyles = (theme) => ({
  position: 'absolute',
  bottom: 7,
  left: 7,
  gap: 0.5,
  alignItems: 'flex-end',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export default function ImageOverlayWrapper({ children, photoCount, link }) {
  return (
    <MaxWidthContainer disableGutters>
      <Box sx={boxStyles}>
        {children}
        <PopUpLink
          href={link}
          sx={linkStyles}
        >
          <LocalSeeOutlined fontSize="small" />
          <Typography variant="body2"> See All ({photoCount})</Typography>
        </PopUpLink>
      </Box>
    </MaxWidthContainer>
  );
}
