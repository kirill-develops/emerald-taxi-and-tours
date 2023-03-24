function getLowestPrice(locationData, filteredLocations) {
  const filteredLocationsSet = new Set(filteredLocations);
  return locationData
    .filter((location) => filteredLocationsSet.has(location.link))
    .reduce((lowest, item) => {
      if (item.price < lowest) {
        return item.price;
      }

      return lowest;
    }, Infinity);
}

function getHighestPrice(locationData, filteredLocations) {
  const filteredLocationsSet = new Set(filteredLocations);
  return locationData
    .filter((location) => filteredLocationsSet.has(location.link))
    .reduce((highest, item) => {
      if (item.price > highest) {
        return item.price;
      }

      return highest;
    }, -Infinity);
}

function useSortData(data, sortBy = '', filterStartLocation) {
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

        const aLowestPrice = getLowestPrice(a.price, filteredLocations);

        const bLowestPrice = getLowestPrice(b.price, filteredLocations);

        return aLowestPrice - bLowestPrice;
      });
    case 'priceDescending':
      return clonedData.sort((a, b) => {
        const filteredLocations = Object.entries(filterStartLocation)
          .filter(([key, value]) => value)
          .map(([key, value]) => key);

        const aHighestPrice = getHighestPrice(a.price, filteredLocations);

        const bHighestPrice = getHighestPrice(b.price, filteredLocations);

        return (aHighestPrice - bHighestPrice) * -1;
      });
    case 'region':
      return clonedData.sort((a, b) => a.area.localeCompare(b.area));
  }
}

export default useSortData;
