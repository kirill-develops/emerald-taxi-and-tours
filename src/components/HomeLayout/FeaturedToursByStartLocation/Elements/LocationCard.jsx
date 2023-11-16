import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import Link from '@material/Link';
import CardTitle from '@elements/CardTitle';
import NextImage from '@elements/NextImage';

const sizes = { xxs: 145, sm: 160, md: 200 };
const boxStyles = { height: sizes, width: 'auto' };

const CardBox = styled((props) => (
  <Box
    component={Link}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    textDecoration: 'none',
    color: 'text.primary',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    rowGap: 1,
  }),
);

const StyledCard = styled((props) => (
  <Card
    elevation={2}
    {...props}
  />
))(({ theme }) => theme.unstable_sx(boxStyles));

const Caption = styled((props) => (
  <Typography
    variant="subtitle2"
    color="text.secondary"
    {...props}
  />
))(({ theme }) => theme.unstable_sx({ fontWeight: 300 }));

export default React.memo(function LocationCard({
  url,
  title,
  numberOfTours,
  image,
}) {
  return (
    <CardBox href={`tours/${url}`}>
      <StyledCard>
        <CardActionArea component="div">
          <NextImage
            src={image}
            altCaption={`Picture of ${title}`}
            boxStyles={boxStyles}
          />
        </CardActionArea>
      </StyledCard>
      <div>
        <CardTitle
          variant="smallBold"
          noWrap
        >
          {title}
        </CardTitle>
        <Caption>{numberOfTours} tours</Caption>
      </div>
    </CardBox>
  );
});
