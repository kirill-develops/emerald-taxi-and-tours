import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import React from 'react';
import Link from '@material/Link';
import CardTitle from '@elements/CardTitle';
import NextImage from '@elements/NextImage';

const sizes = { xxs: 145, sm: 160, md: 200 };
const boxStyles = { height: sizes, width: 'auto' };

export default React.memo(function LocationCard({
  url,
  title,
  numberOfTours,
  image,
}) {
  return (
    <Box
      component={Link}
      href={`tours/${url}`}
      sx={{
        textDecoration: 'none',
        color: 'text.primary',
      }}
    >
      <Card
        elevation={1}
        sx={boxStyles}
      >
        <CardActionArea component="div">
          <NextImage
            src={image}
            altCaption={`Picture of ${title}`}
            boxStyles={boxStyles}
          />
        </CardActionArea>
      </Card>
      <CardTitle variant="smallBold">{title}</CardTitle>
      <p>{numberOfTours} tours</p>
    </Box>
  );
});
