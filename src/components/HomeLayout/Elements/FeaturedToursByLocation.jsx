import Image from 'next/image';
import { Box, CardActionArea, Stack, Typography, styled } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react';
import HomeSection from './HomeSection';
import { extractProps } from '../../ToursLayout/hooks/useTour';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import Link from '@material/Link';

const MuiImage = styled(Image)({ objectFit: 'cover', zIndex: 0 });

const headingStackStyles = {
  paddingY: 1.5,
  paddingX: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.58)',
  alignItems: 'center',
  height: '100%',
};

function HeadingStack({ children }) {
  return (
    <Stack
      sx={headingStackStyles}
      direction="row"
      columnGap={1}
    >
      {children}
    </Stack>
  );
}

const gridContainerStyles = {
  zIndex: 1,
  alignItems: 'stretch',
  width: 'calc(100% +16px)',
};

export default function FeatureTours() {
  const tourPickupAreas = extractProps('price');

  return (
    <Box sx={{ position: 'relative' }}>
      <HomeSection title="Browse Private Island Tours By Pickup Location">
        <GridContainer
          sx={gridContainerStyles}
          spacing={2}
        >
          {tourPickupAreas.map(({ name, link }) => (
            <GridItem
              key={link}
              sm={6}
            >
              <CardActionArea
                LinkComponent={Link}
                href={`tours/${link}`}
              >
                <HeadingStack>
                  <PlaceIcon fontSize="small" />
                  <Typography color="primary.light">{name}</Typography>
                </HeadingStack>
              </CardActionArea>
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
