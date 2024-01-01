import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import React from 'react';
import Link from '@material/Link';
import ImageOverlayWrapper from '../ImageOverlayWrapper/ImageOverlayWrapper';
import CardImage from '../Elements/CardImage';
import NoWrapCardHeader from '../Elements/NoWrapCardHeader';

const heightStyles = { height: '100%' };

const StyledLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 1.25,
  }),
);

const StyledCard = styled(Card)(({ theme, sx }) =>
  theme.unstable_sx({
    height: { xxs: 115, xs: 125, sm: 140, md: 180 },
    ...sx,
  }),
);

const StyledActionArea = styled((props) => (
  <CardActionArea
    component={'div'}
    {...props}
  />
))(({ theme }) => theme.unstable_sx(heightStyles));

const CardStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ ...heightStyles, flexDirection: 'column' }),
);

const StyledBox = styled(Box)(({ theme }) => theme.unstable_sx({ px: 1 }));

export default React.memo(function GridCardWrapper({
  url = '',
  type,
  price,
  picData,
  title,
  subheader,
  noWrap = false,
  rankingEl,
  ...rest
}) {
  return (
    <StyledLink href={url}>
      <StyledCard {...rest}>
        <StyledActionArea href={url}>
          <CardStack>
            <ImageOverlayWrapper
              type={type}
              price={price}
            >
              <CardImage picData={picData} />
            </ImageOverlayWrapper>
          </CardStack>
        </StyledActionArea>
      </StyledCard>
      <StyledBox>
        <NoWrapCardHeader
          title={title}
          titleVariant="smallBold"
          subheader={subheader}
          subheaderVariant="smallCaption"
          noWrap={noWrap}
        />
        {rankingEl}
      </StyledBox>
    </StyledLink>
  );
});
