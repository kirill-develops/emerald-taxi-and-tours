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

export default React.memo(function CardImageWithOverlay({
  type,
  price,
  picData,
  awards,
}) {
  return (
    <StyledCardGridItem>
      <ImageOverlayWrapper
        type={type}
        price={price}
        awards={awards}
      >
        <CardImage picData={picData} />
      </ImageOverlayWrapper>
    </StyledCardGridItem>
  );
});
