import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react';
import HomeSection from './HomeSection';
import { extractProps } from '../../ToursLayout/hooks/useTour';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import Link from '@material/Link';
import { amber } from '@mui/material/colors';

const MuiImage = styled(Image)({ objectFit: 'cover', zIndex: 0 });

const titleStyles = { color: (theme) => theme.palette.common.white };

const buttonStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.675)',
  borderRadius: '16px',
  '&:hover': {
    backgroundColor: 'rgba(38,38,38,0.625)',
    borderColor: amber[700],
  },
  backdropFilter: 'blur(0.875px)',
  color: amber[500],
};

const gridContainerStyles = {
  zIndex: 1,
  alignItems: 'stretch',
  width: 'calc(100% +16px)',
};

export default function FeatureTours() {
  const tourPickupAreas = extractProps('price');

  return (
    <Box sx={{ position: 'relative' }}>
      <HomeSection
        title="Browse Private Island Tours By Pickup Location"
        titleStyles={titleStyles}
      >
        <GridContainer
          sx={gridContainerStyles}
          spacing={2}
        >
          {tourPickupAreas.map(({ name, link }) => (
            <GridItem
              key={link}
              sm={6}
            >
              <Button
                LinkComponent={Link}
                href={`tours/${link}`}
                variant="outlined"
                startIcon={<PlaceIcon fontSize="small" />}
                fullWidth
                sx={buttonStyles}
              >
                {name}
              </Button>
            </GridItem>
          ))}
        </GridContainer>
      </HomeSection>
      <MuiImage
        src="/images/101.png"
        alt="background image"
        fill
      />
    </Box>
  );
}
