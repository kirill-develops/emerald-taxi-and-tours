import React, { useMemo } from 'react';

function getSubcategoryString(subcategory) {
  return subcategory
    ?.slice(0, 3)
    .map(({ localized_name }) => localized_name)
    .join(', ');
}

export default function useCardSubheading({
  priceLevel,
  area,
  cuisine,
  groups,
  subcategory,
}) {
  const tripAdvisorSubcategory = useMemo(
    () => cuisine ?? groups ?? subcategory,
    [cuisine, groups, subcategory],
  );

  const subcategoryString = useMemo(
    () => getSubcategoryString(tripAdvisorSubcategory),
    [tripAdvisorSubcategory],
  );

  const subheading = `${priceLevel ? `${priceLevel} ∙ ` : ''}${area}${
    subcategoryString ? ` ∙ ${subcategoryString}` : ''
  }`;

  return subheading;
}
