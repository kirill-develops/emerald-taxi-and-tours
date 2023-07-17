import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Divider from '@mui/material/Divider';
import React, { useMemo } from 'react';

import Link from '@material/Link';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import ImageOverlayWrapper from './Elements/ImageOverlayWrapper';
import CardImage from './Elements/CardImage';
import CardContentGridItem from './Elements/CardContentGridItem';
import BookNowButton from './Elements/BookNowButton';
import NoWrapCardHeader from './Elements/NoWrapCardHeader';

const heightStyles = { height: '100%' };

const cardActionsStyles = { p: 2, justifyContent: 'space-between' };

const CardGridItemStyles = {
  width: '100%',
  flexDirection: 'column',
};

function CardGridItem({ children }) {
  return <GridItem sx={CardGridItemStyles}>{children}</GridItem>;
}

function GridCard({
  props: {
    children,
    url,
    type,
    price,
    picData,
    name,
    area,
    noWrap,
    noGrid,
    bookNowUrl,
    cardActions,
    disableRipple,
    ...rest
  },
}) {
  const disableRippleStyles = useMemo(
    () => (disableRipple ? { cursor: 'unset' } : undefined),
    [disableRipple],
  );

  const cardActionAreaStyles = useMemo(
    () => ({ ...heightStyles, ...disableRippleStyles }),
    [disableRippleStyles],
  );

  const cardLinkComponent = disableRipple ? 'div' : undefined;
  const buttonLinkComponent = disableRipple ? undefined : 'div';
  const dynamicUrl = !disableRipple ? undefined : url || bookNowUrl;

  return (
    <Card
      square
      sx={heightStyles}
      {...rest}
    >
      <CardActionArea
        href={url}
        component={cardLinkComponent}
        LinkComponent={Link}
        disableRipple={disableRipple}
        sx={cardActionAreaStyles}
      >
        <GridContainer sx={heightStyles}>
          <GridItem
            xxs={5}
            sx={heightStyles}
          >
            <ImageOverlayWrapper
              type={type}
              price={price}
            >
              <CardImage picData={picData} />
            </ImageOverlayWrapper>
          </GridItem>
          <CardContentGridItem xxs={7}>
            <Box sx={{ p: 2 }}>
              <NoWrapCardHeader
                title={name}
                subheader={area}
                noWrap={noWrap}
              />
            </Box>
            <Divider variant="middle" />
            {children}
            <CardActions
              disableSpacing
              sx={cardActionsStyles}
            >
              <BookNowButton
                url={dynamicUrl}
                component={buttonLinkComponent}
              />
              {cardActions}
            </CardActions>
          </CardContentGridItem>
        </GridContainer>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(function GridCardWrapper({
  children,
  url = '',
  type,
  price,
  picData,
  name,
  area,
  bookNowUrl,
  cardActions,
  noWrap = false,
  noGrid = false,
  disableRipple = false,
  ...rest
}) {
  const props = {
    children,
    url,
    type,
    price,
    picData,
    name,
    area,
    noWrap,
    noGrid,
    bookNowUrl,
    cardActions,
    disableRipple,
    ...rest,
  };

  return noGrid ? (
    <GridCard props={props} />
  ) : (
    <CardGridItem>
      <GridCard props={props} />
    </CardGridItem>
  );
});
