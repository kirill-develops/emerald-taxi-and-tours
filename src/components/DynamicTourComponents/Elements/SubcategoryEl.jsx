import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { detailTypographyProps } from '../DetailsComponent';

function SubcategoryEl({ subcategory }) {
  return useMemo(
    () =>
      subcategory?.slice(0, 3).map(({ localized_name }, i) => (
        <Typography
          component="span"
          key={localized_name}
          {...detailTypographyProps}
        >
          {localized_name}
          {i !== 2 && ', '}
        </Typography>
      )),
    [subcategory],
  );
}

export default SubcategoryEl;
