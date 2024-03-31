import { styled } from '@mui/material/styles';
import React from 'react';
import Link from '@material/Link';

const ReviewLink = styled((props) => (
  <Link
    variant="cardCaption"
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    textDecoration: 'none',
    color: (theme) => theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
);

export default function ReviewHeadlines({ reviews, url }) {
  const reviewsClone = structuredClone(reviews);

  return reviewsClone
    ?.sort((a, b) => b.rating - a.rating)
    .slice(0, 2)
    .map(({ id, title }) => (
      <ReviewLink
        href={`${url}#${id}`}
        key={id}
      >
        &quot;{title}&quot;
      </ReviewLink>
    ));
}
