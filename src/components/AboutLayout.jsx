import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';

import FormInputStack from '@elements/FormInputStack';
import aboutPic from '@../public/aboutUs.jpeg';

function AboutCard(props) {
  return (
    <Card
      elevation={5}
      {...props}
    />
  );
}

function AboutLayout() {
  const theme = useTheme();
  const { sm } = theme.breakpoints.values;

  return (
    <FormInputStack
      sx={{ height: '100%', columnGap: 0, rowGap: 0, mb: 5 }}
      component={AboutCard}
    >
      <Box
        sx={{
          position: 'relative',
          flexGrow: 1,
          width: '100%',
          height: { xs: '50vh', sm: 'initial' },
        }}
      >
        <Image
          src={aboutPic}
          alt="Photo of happy driver & vehicle"
          quality={100}
          fill
          style={{ objectFit: 'cover' }}
          sizes={`(max-width: ${sm}px) 100vw, 
          50vw`}
        />
      </Box>
      <Box sx={{ flexGrow: 0.5, width: '100%', p: 4 }}>
        <Typography
          variant="body1"
          paragraph
        >
          Welcome to Emerald Taxi & Tour, your go-to tour company for
          unforgettable experiences in Jamaica! Our expertly crafted tours will
          take you on an adventure to discover the most magical destinations on
          the island. From the stunning Dunn&apos;s River Falls to the
          breathtaking Blue Hole and YS Falls, to the iconic Rick&apos;s Cafe
          and beyond, we&apos;ve got you covered.
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          As a top-rated tour company on TripAdvisor, we pride ourselves on
          providing exceptional service from start to finish. We offer private
          airport transportation to and from Norman Manley International Airport
          in Kingston or Donald Sangster&apos;s International Airport in
          Montego. With our 24/7 availability, we&apos;re dedicated to assisting
          you every step of the way, paying close attention to every detail so
          you can relax and enjoy the trip of a lifetime.
        </Typography>
        <Typography
          variant="body1"
          paragraph
        >
          Experience the thrill of adventure, the beauty of nature, and the
          warmth of the Jamaican people with us. Book your Jamaica tour or
          airport transportation in Jamaica with Emerald Taxi & Tour today and
          let us take you on a jour ney through the heart of the island.
        </Typography>
      </Box>
    </FormInputStack>
  );
}

export default AboutLayout;
