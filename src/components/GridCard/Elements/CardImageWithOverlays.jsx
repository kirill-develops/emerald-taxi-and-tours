import { styled } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';
import React from 'react';
import Link from '@material/Link';
import { GridItem } from '@elements/CustomGridEl';
import CardImage from './CardImage';
import ImageOverlayWrapper from '../ImageOverlayWrapper/ImageOverlayWrapper';

const heightStyles = { height: '100%' };

const StyledCardGridItem = styled((props) => (
  <GridItem
    xxs={5}
    {...props}
  />
))(({ theme }) => theme.unstable_sx(heightStyles));

const StyledCardActionArea = styled((props) => (
  <CardActionArea
    LinkComponent={Link}
    disableRipple
    disableTouchRipple
    {...props}
  />
))(({ theme }) => theme.unstable_sx(heightStyles));

export default React.memo(function CardImageWithOverlay({
  url,
  type,
  price,
  picData,
  awards,
}) {
  return (
    <StyledCardGridItem>
      <StyledCardActionArea href={url}>
        <ImageOverlayWrapper
          type={type}
          price={price}
          awards={awards}
        >
          <CardImage picData={picData} />
        </ImageOverlayWrapper>
      </StyledCardActionArea>
    </StyledCardGridItem>
  );
});
