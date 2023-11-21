import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';

const paragraphStringArr = [
  `Your go-to transfer & tour company for
          unforgettable experiences in Jamaica. Our expertly crafted tours will
          take you on an adventure to discover the most magical destinations on
          the island. From the stunning Dunn's River Falls to the
          breathtaking Blue Hole and YS Falls, to the iconic Rick's Cafe
          and beyond, we've got you covered.`,
  `As a top-rated transfer & tour company on TripAdvisor, we pride ourselves on
          providing exceptional service from start to finish. We offer private
          airport transportation to and from Norman Manley International Airport
          in Kingston or Donald Sangster's International Airport in
          Montego. With our 24/7 availability, we're dedicated to assisting
          you every step of the way, paying close attention to every detail so
          you can relax and enjoy the trip of a lifetime.`,
  `Experience the thrill of adventure, the beauty of nature, and the
          warmth of the Jamaican people with us. Book your Jamaica tour or
          airport transportation in Jamaica with Emerald Taxi & Tour today and
          let us take you on a journey through the heart of the island.`,
];

const ScriptBox = styled(Box)(({ theme }) => theme.unstable_sx({ p: 2 }));

const Paragraph = React.memo(function Paragraph({
  children,
  isLast = false,
  ...other
}) {
  return (
    <Typography
      variant="body1"
      paragraph={!isLast}
      {...other}
    >
      {children}
    </Typography>
  );
});

const Paragraphs = React.memo(function Paragraphs() {
  return paragraphStringArr.map((text, i) => {
    const isLast = i === paragraphStringArr.length - 1;
    return (
      <Paragraph
        key={text.slice(0, 5)}
        isLast={isLast}
      >
        {text}
      </Paragraph>
    );
  });
});

export default function Summary() {
  return (
    <Box sx={{ flexGrow: 0.5, width: '100%' }}>
      <Typography
        variant="h4"
        color="primary"
      >
        Welcome to Emerald Taxi & Tours!
      </Typography>
      <ScriptBox>
        <Paragraphs />
      </ScriptBox>
    </Box>
  );
}
