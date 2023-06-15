import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';

const paragraphStringArr = [
  `Welcome to Emerald Taxi & Tour, your go-to tour company for
          unforgettable experiences in Jamaica! Our expertly crafted tours will
          take you on an adventure to discover the most magical destinations on
          the island. From the stunning Dunn's River Falls to the
          breathtaking Blue Hole and YS Falls, to the iconic Rick's Cafe
          and beyond, we've got you covered.`,
  `As a top-rated tour company on TripAdvisor, we pride ourselves on
          providing exceptional service from start to finish. We offer private
          airport transportation to and from Norman Manley International Airport
          in Kingston or Donald Sangster's International Airport in
          Montego. With our 24/7 availability, we're dedicated to assisting
          you every step of the way, paying close attention to every detail so
          you can relax and enjoy the trip of a lifetime.`,
  `Experience the thrill of adventure, the beauty of nature, and the
          warmth of the Jamaican people with us. Book your Jamaica tour or
          airport transportation in Jamaica with Emerald Taxi & Tour today and
          let us take you on a jour ney through the heart of the island.`,
];

const ScriptBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({ flexGrow: 0.5, width: '100%', p: 4 }),
);

const Paragraph = React.memo(function Paragraph({ children, ...other }) {
  return (
    <Typography
      variant="body1"
      paragraph
      {...other}
    >
      {children}
    </Typography>
  );
});

const Paragraphs = React.memo(function Paragraphs() {
  return paragraphStringArr.map((text) => (
    <Paragraph key={text.slice(0, 5)}>{text}</Paragraph>
  ));
});

export default function Summary() {
  return (
    <ScriptBox>
      <Paragraphs />
    </ScriptBox>
  );
}
