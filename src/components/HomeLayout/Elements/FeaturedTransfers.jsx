import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import Link from '@material/Link';
import CardTitle from '@elements/CardTitle';
import HomeSection from './HomeSection';

const airportTransfersLinks = [
  {
    title: 'Montego Bay Airport',
    caption: 'Private transport to and from the Montego Bay Airport',
    image: '/images/101.png',
    url: '/transfer/MBJ',
  },
  {
    title: 'Kingston Airport',
    caption: 'Private transport to and from the Kingston Airport',
    image: '/images/99.jpeg',
    url: '/transfer/KIN',
  },
  {
    title: 'Resort Transfers',
    caption: 'Private transport Between resorts',
    image: '/images/negril-beach-jamaica.jpeg',
    url: '/transfer/resort',
  },
];

const StyledCard = styled(Card)(({ theme }) =>
  theme.unstable_sx({
    minWidth: 200,
    flex: 1,
    minHeight: { xxs: 160, sm: 190 },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    borderRadius: 0,
  }),
);

const MuiImage = styled(Image)({
  objectFit: 'cover',
});

function TransportCard({ title, caption, image, url, children, sx, ...rest }) {
  if (!url) return null;

  return (
    <StyledCard
      elevation={1}
      {...rest}
    >
      <CardActionArea
        sx={{
          height: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
        LinkComponent={Link}
        href={url}
      >
        <MuiImage
          src={image}
          alt={`${title} card background`}
          fill
        />
        <CardContent
          sx={{
            width: '100%',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.445)',
            backdropFilter: 'blur(1px)',
          }}
        >
          {title}
          {caption}
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default function FeaturedTransfer() {
  return (
    <HomeSection title={'Plan Your Private Transportation'}>
      <Stack
        direction={{ xxs: 'column', sm: 'row' }}
        width={'100%'}
        justifyContent={'space-between'}
        columnGap={4}
        rowGap={2}
        sx={{ overflowX: 'scroll' }}
      >
        {airportTransfersLinks.map(({ title, caption, url, image }) => (
          <TransportCard
            key={image}
            title={<CardTitle>{title}</CardTitle>}
            caption={<Typography variant="body1">{caption}</Typography>}
            image={image}
            url={url}
          />
        ))}
      </Stack>
    </HomeSection>
  );
}
