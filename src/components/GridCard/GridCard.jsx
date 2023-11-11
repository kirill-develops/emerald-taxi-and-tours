import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import React from 'react';
import Link from '@material/Link';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import ImageOverlayWrapper from './ImageOverlayWrapper/ImageOverlayWrapper';
import CardImage from './Elements/CardImage';
import CardContentGridItem from './Elements/CardContentGridItem';
import NoWrapCardHeader from './Elements/NoWrapCardHeader';

const heightStyles = { height: '100%' };

const cardStyles = {
  ...heightStyles,
  backgroundColor: (theme) => theme.palette.primary.container,
  color: (theme) => theme.palette.primary.containerText,
};

const cardContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  rowGap: 0.5,
};

const CardGridItemStyles = {
  width: '100%',
  flexDirection: 'column',
};

function CardGridItem({ children }) {
  return <GridItem sx={CardGridItemStyles}>{children}</GridItem>;
}

const linkStyles = {
  textDecoration: 'none',
  color: (theme) => theme.palette.text.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
};

function StyledLink({ href, children }) {
  return (
    <Link
      href={href}
      variant="cardCaption"
      sx={linkStyles}
    >
      {children}
    </Link>
  );
}

function GridCard({
  cardProps: {
    children,
    noWrap = false,
    price,
    picData,
    rankingEl,
    reviews,
    subheader,
    subheaderVariant,
    title,
    titleVariant,
    type,
    url = '',
    sx,
    ...rest
  },
}) {
  const reviewsClone = structuredClone(reviews);

  const reviewsJsx = reviewsClone
    ?.sort((a, b) => b.rating - a.rating)
    .slice(0, 2)
    .map(({ id, title }) => (
      <StyledLink
        href={`${url}#${id}`}
        key={id}
      >
        &quot;{title}&quot;
      </StyledLink>
    ));

  const dynamicCardStyles = { ...cardStyles, ...sx };

  return (
    <Card
      sx={dynamicCardStyles}
      {...rest}
    >
      <CardActionArea
        component="div"
        sx={heightStyles}
      >
        <GridContainer sx={heightStyles}>
          <GridItem
            xxs={5}
            sx={heightStyles}
          >
            <CardActionArea
              href={url}
              LinkComponent={Link}
              sx={heightStyles}
              disableRipple
              disableTouchRipple
            >
              <ImageOverlayWrapper
                type={type}
                price={price}
              >
                <CardImage picData={picData} />
              </ImageOverlayWrapper>
            </CardActionArea>
          </GridItem>
          <CardContentGridItem xxs={7}>
            <ButtonBase
              href={url}
              LinkComponent={Link}
              sx={{ ...heightStyles, justifyContent: 'flex-start' }}
              disableRipple
              disableTouchRipple
            >
              <Box sx={{ py: 1.25, px: 2 }}>
                <NoWrapCardHeader
                  title={title}
                  titleVariant={titleVariant}
                  subheader={subheader}
                  subheaderVariant={subheaderVariant}
                  subheaderColor={(theme) =>
                    theme.palette.secondary.containerText
                  }
                  noWrap={noWrap}
                />
                {rankingEl}
              </Box>
            </ButtonBase>
            <Divider variant="middle" />
            <CardContent sx={cardContentStyles}>{reviewsJsx}</CardContent>
            {children}
          </CardContentGridItem>
        </GridContainer>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(function GridCardWrapper({
  noGrid = false,
  ...rest
}) {
  return noGrid ? (
    <GridCard cardProps={rest} />
  ) : (
    <CardGridItem>
      <GridCard cardProps={rest} />
    </CardGridItem>
  );
});
