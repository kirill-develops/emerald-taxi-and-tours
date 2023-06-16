import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { detailTypographyProps } from '../DetailsComponent';
import { ParamContext } from '@Form/FormContextProvider';

export default React.memo(function FormattedRankingString({}) {
  const {
    tourParams: {
      tripAdvisorDetails: {
        ranking_data: { ranking_string: rankingString = '' } = {},
      },
    },
  } = useContext(ParamContext);

  const numberRegex = /#[0-9]+/;
  const numberMatch = rankingString?.match(numberRegex);

  if (numberMatch) {
    const numberPart = numberMatch[0];
    const textPart = rankingString.substring(numberPart.length);

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
  return <Typography {...detailTypographyProps}>{rankingString}</Typography>;
});