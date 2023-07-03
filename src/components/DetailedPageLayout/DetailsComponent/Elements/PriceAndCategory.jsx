import Typography from '@mui/material/Typography';
import React, { useContext, useMemo } from 'react';
import SubcategoryEl from '../../Elements/SubcategoryEl';
import { ParamContext } from '@Form/FormContextProvider';
import { detailTypographyProps } from '..';

export default React.memo(function PriceAndCategory() {
  const {
    tripAdvisorDetails: {
      cuisine,
      groups,
      price_level: priceLevel,
      subcategory,
    },
  } = useContext(ParamContext);

  const subcategoryString = useMemo(
    () => cuisine ?? groups ?? subcategory,
    [cuisine, groups, subcategory],
  );

  return (
    <Typography {...detailTypographyProps}>
      {priceLevel} <SubcategoryEl subcategory={subcategoryString} />
    </Typography>
  );
});
