import Typography from '@mui/material/Typography';
import React, { useContext, useMemo } from 'react';
import SubcategoryEl from '../../Elements/SubcategoryEl';
import { ParamContext } from '@Form/FormContextProvider';
import { detailTypographyProps } from '..';

export default React.memo(function PriceAndCategory() {
  const {
    tourParams: {
      tripAdvisorDetails: { cuisine, groups, price_level: priceLevel },
    },
  } = useContext(ParamContext);

  const subcategory = useMemo(() => cuisine ?? groups ?? {}, [cuisine, groups]);

  return (
    <Typography {...detailTypographyProps}>
      {priceLevel} <SubcategoryEl subcategory={subcategory} />
    </Typography>
  );
});
