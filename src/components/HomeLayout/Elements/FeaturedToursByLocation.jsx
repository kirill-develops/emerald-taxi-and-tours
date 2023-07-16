import Image from 'next/image';
import { Box, CardActionArea, Stack, Typography, styled } from '@mui/material';
import Place from '@mui/icons-material/Place';
import React from 'react';
import HomeSection from './HomeSection';
import { extractProps } from '../../ToursLayout/hooks/useTour';
import tourData from '@data/tourData.json';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import Link from '@material/Link';

const MuiImage = styled(Image)({ objectFit: 'cover', zIndex: 0 });

export default function FeatureTours() {
  const tourPickupAreas = extractProps('price');

  const toursByAreaObj = tourPickupAreas.map(({ link }) => {
    const filteredData = tourData.filter((tour) =>
      tour.price.some(({ link: priceLink }) => {
        return link === priceLink;
      }),
    );

    return { link, ...filteredData };
  });

  return (
    <Box sx={{ position: 'relative' }}>
      <HomeSection title="Browse Private Island Tours By Location">
        <GridContainer
          sx={{ zIndex: 1 }}
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
                <Stack
                  sx={{
                    paddingY: 1.5,
                    paddingX: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.527)',
                    alignItems: 'center',
                  }}
                  direction="row"
                  columnGap={1}
                >
                  <Place fontSize="small" />
                  <Typography color="primary.light">{name}</Typography>
                </Stack>
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
