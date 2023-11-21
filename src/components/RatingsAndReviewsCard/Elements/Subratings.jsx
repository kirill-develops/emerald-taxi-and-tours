import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';

const ratingStyles = { fontSize: '0.95rem' };

export default function Subratings() {
  const {
    tripAdvisorDetails: { subratings },
  } = useContext(ParamContext);

  if (!subratings) {
    return null;
  }

  return Object.values(subratings).map(({ localized_name: name, value }) => (
    <Stack
      direction="row"
      justifyContent="space-between"
      key={name}
    >
      <Typography variant="subtitle2">{name}</Typography>
      <Rating
        defaultValue={Number(value)}
        precision={0.1}
        sx={ratingStyles}
        readOnly
      />
    </Stack>
  ));
}
