import RankingEl from './Elements/RankingEl';
import FormattedRankingString from './Elements/FormattedRankingString';

const PageCard = styled(Card)(({ theme }) =>
  theme.unstable_sx({
    width: '100%',
    py: { xxs: 1, md: 3 },
    borderRadius: 0,
    borderLeft: 'none',
    borderRight: 'none',
  }),
);

export default function RatingsAndReviews({ data }) {
  const { rating, numReviews, rankingData } = data;
  const { ranking_string: rankingString = '' } = rankingData;

  console.log(data);
  return (
    <PageCard variant="outlined">
      <MaxWidthContainer>
        <Typography variant="h6">Ratings and reviews</Typography>
        <RankingEl
          rating={rating}
          numReviews={numReviews}
        >
          <Typography variant="h6">{rating}</Typography>
        </RankingEl>
        <Divider />
        <FormattedRankingString rankingString={rankingString} />
      </MaxWidthContainer>
    </PageCard>
  );
}
