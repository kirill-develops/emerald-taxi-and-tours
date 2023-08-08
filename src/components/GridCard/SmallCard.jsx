import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import React from 'react';
import Link from '@material/Link';
import { GridItem } from '@elements/CustomGridEl';
import ImageOverlayWrapper from './ImageOverlayWrapper/ImageOverlayWrapper';
import CardImage from './Elements/CardImage';
import NoWrapCardHeader from './Elements/NoWrapCardHeader';

const heightStyles = { height: '100%' };

const CardGridItemStyles = {
  width: '100%',
  flexDirection: 'column',
};

function CardGridItem({ children }) {
  return <GridItem sx={CardGridItemStyles}>{children}</GridItem>;
}

function SmallCard({
  props: {
    url = '',
    type,
    price,
    picData,
    title,
    subheader,
    rankingEl,
    noWrap = false,
    ...rest
  } = {},
}) {
  return (
    <Card
      square
      sx={heightStyles}
      {...rest}
    >
      <CardActionArea
        href={url}
        LinkComponent={Link}
        sx={heightStyles}
      >
        <Stack
          direction="column"
          sx={heightStyles}
        >
          <ImageOverlayWrapper
            type={type}
            price={price}
          >
            <CardImage picData={picData} />
          </ImageOverlayWrapper>

          <Box sx={{ py: 1.25, px: 2 }}>
            <NoWrapCardHeader
              title={title}
              titleVariant="smallBold"
              subheader={subheader}
              subheaderVariant="smallCaption"
              noWrap={noWrap}
            />
            {rankingEl}
          </Box>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(function GridCardWrapper({
  noGrid = false,
  ...rest
}) {
  return noGrid ? (
    <SmallCard props={rest} />
  ) : (
    <CardGridItem>
      <SmallCard props={rest} />
    </CardGridItem>
  );
});
