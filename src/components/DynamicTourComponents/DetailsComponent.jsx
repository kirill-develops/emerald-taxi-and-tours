import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useMemo } from 'react';
import { Laptop, Launch, Phone } from '@mui/icons-material';
import { PopUpLink, TelLink } from '@elements/Links';
import DetailDevider from './Elements/DetailDevider';
import RankingEl from './Elements/RankingEl';
import FormattedRankingString from './Elements/FormattedRankingString';
import SubcategoryEl from './Elements/SubcategoryEl';

export const detailTypographyProps = { variant: 'body2' };

function DetailsComponent({ details, children }) {
  console.log(details);

  const {
    address_obj: { address_string: addressString = '' } = {},
    cuisine,
    groups,
    phone,
    price_level: priceLevel,
    ranking_data: { ranking_string: rankingString = '' } = {},
    num_reviews: numReviews,
    rating,
    rating_image_url: ratingImageUrl,
    web_url: webUrl,
    website,
  } = details;

  const rankingJSX = useMemo(
    () => (
      <RankingEl
        rating={rating}
        numReviews={numReviews}
      />
    ),
    [rating, numReviews],
  );

  const subcategory = useMemo(() => cuisine ?? groups ?? {}, [cuisine, groups]);

  const priceNcategoryJSX = useMemo(
    () => (
      <Typography {...detailTypographyProps}>
        {priceLevel} <SubcategoryEl subcategory={subcategory} />
      </Typography>
    ),
    [priceLevel, subcategory],
  );

  const laptopLinks = useMemo(
    () => (
      <>
        <Stack
          direction="row"
          spacing={2}
          divider={<DetailDevider />}
        >
          <PopUpLink href={website}>
            <Laptop fontSize="small" />
            Website
          </PopUpLink>
          <TelLink href={`tel:${phone}`}>
            <Phone fontSize="small" />
            {phone}
          </TelLink>
          <PopUpLink href={webUrl}>
            <Launch fontSize="small" />
            TripAdvisor Page
          </PopUpLink>
        </Stack>
        <Typography {...detailTypographyProps}>{addressString}</Typography>
      </>
    ),
    [website, phone, webUrl, addressString],
  );

  const isSmBreakpoint = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: { xxs: 1.5, sm: 2, md: 3 } }}>
      <Container>
        <Stack
          direction={isSmBreakpoint ? 'column' : 'row'}
          spacing={isSmBreakpoint ? 0.5 : 1}
          divider={!isSmBreakpoint && <DetailDevider />}
        >
          {rankingJSX}
          {!isSmBreakpoint && (
            <FormattedRankingString rankingString={rankingString} />
          )}
          {priceNcategoryJSX}
        </Stack>
        {!isSmBreakpoint && laptopLinks}
      </Container>
      {children}
    </Box>
  );
}

export default React.memo(DetailsComponent);
