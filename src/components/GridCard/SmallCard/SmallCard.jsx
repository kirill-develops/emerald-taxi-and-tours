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

const StyledCard = styled(Card)(({ theme }) =>
  theme.unstable_sx({ height: { xxs: 115, xs: 125, sm: 140, md: 180 } }),
);

const StyledActionArea = styled((props) => (
  <CardActionArea
    LinkComponent={Link}
    {...props}
  />
))(({ theme }) => theme.unstable_sx(heightStyles));

const CardStack = styled(Stack)(({ theme }) =>
  theme.unstable_sx({ ...heightStyles, flexDirection: 'column' }),
);

const StyledBox = styled(Box)(({ theme }) => theme.unstable_sx({ pt: 1.25 }));

export default React.memo(function GridCardWrapper({
  url = '',
  type,
  price,
  picData,
  title,
  subheader,
  noWrap = false,
  rankingEl,
}) {
  return (
    <>
      <StyledCard>
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
    </>
  );
});
