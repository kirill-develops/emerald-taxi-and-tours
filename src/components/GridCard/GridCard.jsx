import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import React, { useMemo } from 'react';
import { GridContainer, GridItem } from '@elements/CustomGridEl';
import CardContentGridItem from './Elements/CardContentGridItem';
import CardImageWithOverlay from './Elements/CardImageWithOverlays';
import {
  CardHighlight,
  heightStyles,
  StyledBox,
  StyledCard,
  StyledCardContent,
  StyledLink,
  StyledNoWrapCardHeader,
} from './Elements/StyledElements';
import ReviewHeadlines from './Elements/ReviewHeadlines';

export default React.memo(function GridCard({
  noGrid = false,
  children,
  awards,
  noWrap = false,
  price,
  picData,
  rankingEl,
  reviews,
  subheader,
  title,
  type,
  url = '',
  ...rest
}) {
  const overlayImageProps = { url, type, price, picData, awards };

  return (
    <GridCardWrapper
      noGrid={noGrid}
      {...rest}
    >
      <CardImageWithOverlay {...overlayImageProps} />
      <CardContentGridItem>
        <StyledLink href={url}>
          <StyledBox>
            <StyledNoWrapCardHeader
              title={title}
              subheader={subheader}
              noWrap={noWrap}
            />
            {rankingEl}
          </StyledBox>
        </StyledLink>
        <Divider variant="middle" />
        <StyledCardContent>
          <ReviewHeadlines
            reviews={reviews}
            url={url}
          />
        </StyledCardContent>
        {children}
      </CardContentGridItem>
    </GridCardWrapper>
  );
});

const StyledGridItem = styled(GridItem)(({ theme }) =>
  theme.unstable_sx({ width: '100%', flexDirection: 'column' }),
);

function GridCardWrapper({ noGrid, children, ...rest }) {
  const wrappedChildren = useMemo(
    () => (
      <StyledCard {...rest}>
        <CardHighlight>
          <GridContainer sx={heightStyles}>{children}</GridContainer>
        </CardHighlight>
      </StyledCard>
    ),
    [children, rest],
  );

  return noGrid ? (
    wrappedChildren
  ) : (
    <StyledGridItem>{wrappedChildren}</StyledGridItem>
  );
}
