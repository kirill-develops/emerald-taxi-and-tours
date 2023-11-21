import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import RankingEl from '@elements/RankingEl';

export default React.memo(function RankingWrapper({ children }) {
  const { tripAdvisorDetails: { rating, num_reviews: numReviews } = {} } =
    useContext(ParamContext);

  return (
    <RankingEl
      rating={rating}
      numReviews={numReviews}
      ratingColor={(theme) => theme.palette.secondary.main}
      ratingOutlineColor={(theme) => theme.palette.secondary.main}
    >
      {children}
    </RankingEl>
  );
});
