import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import Link from '@material/Link';
import CardTitle from '@elements/CardTitle';

const StyledCard = styled(Card)(({ theme }) =>
  theme.unstable_sx({
    minWidth: 200,
    flex: 1,
    minHeight: { xxs: 160, sm: 210 },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  }),
);

const StyledCardActionArea = styled(CardActionArea)(({ theme }) =>
  theme.unstable_sx({
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }),
);

const MuiImage = styled(Image)({
  objectFit: 'cover',
});

const StyledCardContent = styled(CardContent)(({ theme }) =>
  theme.unstable_sx({
    width: '100%',
    zIndex: 2,
    backgroundColor: (theme) => `${theme.palette.secondary.container}c1`,
    color: theme.palette.common.white,
    backdropFilter: 'blur(1px)',
    position: 'relative',
  }),
);

const cardTitleStyles = {
  color: (theme) => theme.palette.secondary.containerText,
};

const StyledCardTitle = React.memo(function StyledCardTitle({ children }) {
  return (
    <CardTitle
      variant="h6"
      sx={cardTitleStyles}
    >
      {children}
    </CardTitle>
  );
});

export default React.memo(function TransportCard({
  title,
  caption,
  image,
  url,
  ...rest
}) {
  const {
    breakpoints: { values: breakpointValues },
  } = useTheme();

  const imageSizes = `(max-width: ${breakpointValues.sm}) 100dvw,  33dvw`;

  if (!url) return null;

  return (
    <StyledCard
      elevation={8}
      {...rest}
    >
      <StyledCardActionArea
        LinkComponent={Link}
        href={url}
      >
        <MuiImage
          src={image}
          alt={`${title} card background`}
          sizes={imageSizes}
          fill
        />
        <StyledCardContent>
          <StyledCardTitle>{title}</StyledCardTitle>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {caption}
          </Typography>
        </StyledCardContent>
      </StyledCardActionArea>
    </StyledCard>
  );
});
