import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import React from 'react';

import Link from '@material/Link';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import ImageOverlayWrapper from './Elements/ImageOverlayWrapper';
import CardImage from './Elements/CardImage';
import CardContentGridItem from './Elements/CardContentGridItem';
import BookNowButton from './Elements/BookNowButton';

const heightStyles = { height: '100%' };

export const cardStyles = {
  ...heightStyles,
  borderRadius: 0,
};

const cardActionsStyles = { p: 2, justifyContent: 'space-between' };

const CardGridItemStyles = {
  width: '100%',
  flexDirection: 'column',
};

function CardGridItem({ children }) {
  return <GridItem sx={CardGridItemStyles}>{children}</GridItem>;
}

export default React.memo(function GridCard({
  children,
  url = '',
  type,
  price,
  picData,
  name,
  area,
  noWrap = false,
  bookNowUrl,
  cardActions,
  disableRipple = false,
  ...rest
}) {
  const disableRippleStyles = disableRipple && { cursor: 'unset' };

  return (
    <CardGridItem>
      <Card
        sx={cardStyles}
        {...rest}
      >
        <CardActionArea
          href={url}
          LinkComponent={Link}
          disableRipple={disableRipple}
          sx={{ ...heightStyles, ...disableRippleStyles }}
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
                <CardHeader
                  title={name}
                  subheader={area}
                  titleTypographyProps={{ noWrap: noWrap }}
                  subheaderTypographyProps={{ noWrap: noWrap }}
                  sx={{ p: 0, overflow: 'hidden' }}
                />
              </Box>
              <Divider variant="middle" />
              {children}
              <CardActions
                disableSpacing
                sx={cardActionsStyles}
              >
                <BookNowButton url={url || bookNowUrl} />
                {cardActions}
              </CardActions>
            </CardContentGridItem>
          </GridContainer>
        </CardActionArea>
      </Card>
    </CardGridItem>
  );
});
