function calculatePrice(locationData, filteredLocations, reducer, startValue) {
  const filteredLocationsSet = new Set(filteredLocations);

  return locationData
    .filter(
      ({ link }) =>
        !filteredLocationsSet.size || filteredLocationsSet.has(link),
    )
    .reduce(reducer, startValue);
}

export function getLowestPrice(locationData, filteredLocations) {
  const reducer = (acc, { price }) => Math.min(acc, price);
  const startValue = Number.MAX_SAFE_INTEGER;

  return calculatePrice(locationData, filteredLocations, reducer, startValue);
}

export function getHighestPrice(locationData, filteredLocations) {
  const reducer = (acc, { price }) => Math.max(acc, price);
  const startValue = 0;

  return calculatePrice(locationData, filteredLocations, reducer, startValue);
}

export default function useDataSorter(data, sortBy = '', filterStartLocation) {
  const clonedData = structuredClone(data);

  switch (sortBy) {
    case '':
      return clonedData;
    case 'alphabetical':
      return clonedData.sort((a, b) => a.name.localeCompare(b.name));
    case 'priceAscending':
      return clonedData.sort((a, b) => {
        const filteredLocations = Object.entries(filterStartLocation)
          .filter(([key, value]) => value)
          .map(([key, value]) => key);

        const aLowestPrice = getLowestPrice(
          a.starting_points,
          filteredLocations,
        );

        const bLowestPrice = getLowestPrice(
          b.starting_points,
          filteredLocations,
        );

        return aLowestPrice - bLowestPrice;
      });
    case 'priceDescending':
      return clonedData.sort((a, b) => {
        const filteredLocations = Object.entries(filterStartLocation)
          .filter(([key, value]) => value)
          .map(([key, value]) => key);

        const aHighestPrice = getHighestPrice(
          a.starting_points,
          filteredLocations,
        );

        const bHighestPrice = getHighestPrice(
          b.starting_points,
          filteredLocations,
        );

        return (aHighestPrice - bHighestPrice) * -1;
      });
    case 'region':
      return clonedData.sort((a, b) => a.area.localeCompare(b.area));
  }
}
