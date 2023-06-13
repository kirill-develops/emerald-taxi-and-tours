import { Divider, Rating, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useMemo } from 'react';
import Link from '@material/Link';

const detailTypographyProps = { variant: 'body2' };
const linkTypographyProps = { variant: 'subtitle2' };

function DetailsDevider() {
  return (
    <Divider
      orientation="vertical"
      flexItem
    />
  );
}

function RankingEl({ rating, numReviews }) {
  return (
    <>
      <Rating
        defaultValue={rating}
        precision={0.1}
        size="small"
        readOnly
      />
      <Typography {...detailTypographyProps}>{numReviews} reviews</Typography>
    </>
  );
}

function FormattedRankingString({ ranking_string }) {
  const numberRegex = /#[0-9]+/;
  const numberMatch = ranking_string?.match(numberRegex);

  if (numberMatch) {
    const numberPart = numberMatch[0];
    const textPart = ranking_string.substring(numberPart.length);

    const formattedTextPart = textPart.replace(/&amp;/g, '&');

    return (
      <Typography {...detailTypographyProps}>
        <Typography
          component="span"
          fontWeight="bold"
          {...detailTypographyProps}
        >
          {numberPart}
        </Typography>
        {formattedTextPart}
      </Typography>
    );
  }

  // Return the original string if it doesn't match the expected format
  return <Typography {...detailTypographyProps}>{ranking_string}</Typography>;
}

function DetailsComponent({ details }) {
  console.log(details);

  const {
    address_obj: { address_string } = {},
    cuisine,
    groups,
    phone,
    price_level,
    ranking_data: { ranking_string } = {},
    num_reviews,
    rating,
    rating_image_url,
    web_url,
    website,
  } = details;

  const subcategory = useMemo(() => cuisine ?? groups ?? {}, [cuisine, groups]);

  const subcategoryJSX = useMemo(
    () =>
      subcategory?.map(({ localized_name }, i) => (
        <Typography
          component="span"
          key={localized_name}
          {...detailTypographyProps}
        >
          {localized_name}
          {i !== subcategory.length - 1 && ', '}
        </Typography>
      )),
    [subcategory],
  );

  return (
    <Box sx={{ paddingBottom: 2 }}>
      <Stack
        direction="row"
        spacing={1}
        divider={<DetailsDevider />}
      >
        <RankingEl
          rating={rating}
          numReviews={num_reviews}
        />
        <FormattedRankingString ranking_string={ranking_string} />
        <Typography {...detailTypographyProps}>
          {price_level} {subcategoryJSX}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        divider={<DetailsDevider />}
      >
        <Link
          href={website}
          target="_blank"
          {...linkTypographyProps}
        >
          Visit website
        </Link>
        <Link
          href={`tel:${phone}`}
          {...linkTypographyProps}
        >
          {phone}
        </Link>
        <Link
          href={web_url}
          target="_blank"
          {...linkTypographyProps}
        >
          TripAdvisor Page
        </Link>
      </Stack>
      <Typography {...detailTypographyProps}>{address_string}</Typography>
    </Box>
  );
}

export default React.memo(DetailsComponent);
