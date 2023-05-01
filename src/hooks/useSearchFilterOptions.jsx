import Fuse from 'fuse.js';
import { useMemo } from 'react';
import { transferData } from '@data/transfers';
import { tourData } from '@data/tours';

export default function useSearchFilterOptions() {
  const transferOptions = useMemo(
    () =>
      transferData.flatMap(
        ({ name: areaName, destinations, link, airport, airportLink }) => {
          const options = destinations.map((destination) => {
            const name =
              destination.name === 'All Other Resorts, Villas, AirBnB & Homes'
                ? `all other options in ${areaName} <> ${airport}`
                : `${destination.name} <> ${airport}`;

            return {
              name: name,
              area: areaName,
              airport: airport,
              airportLink: airportLink,
              link: `/transfer/${airportLink}/${link}/${destination.link}`,
              type: 'Transfers',
            };
          });

          return options;
        },
      ),
    [],
  );

  const tourOptions = useMemo(
    () =>
      tourData.map(({ name, link, area, type, price }) => {
        const [priceName, priceParish] = price.map(({ name, parish }) => [
          name,
          parish,
        ]);

        return {
          name: `${name} in ${area}`,
          tourType: type,
          from: priceName,
          parish: priceParish,
          link: `/tours/${link}`,
          type: 'Tours',
        };
      }),
    [],
  );

  const searchOptions = useMemo(
    () =>
      [...transferOptions, ...tourOptions]
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.type.localeCompare(b.type)),
    [transferOptions, tourOptions],
  );

  const fuseOptions = useMemo(
    () => ({
      keys: [
        'name',
        'area',
        'airport',
        'airportLink',
        'tourType',
        'from',
        'parish',
        'type',
      ],
      threshold: 0.4,
      findAllMatches: true,
      includeScore: true,
      ignoreCase: true,
      ignoreLocation: true,
      useExtendedSearch: true,
    }),
    [],
  );

  const fuse = useMemo(
    () => new Fuse(searchOptions, fuseOptions),
    [searchOptions, fuseOptions],
  );

  const filterOptionsProp = useMemo(
    () => (options, state) => {
      if (state.inputValue === '') {
        return options;
      }

      const results = fuse.search(state.inputValue);

      return results
        .sort((a, b) => {
          const typeComparison = a.item.type.localeCompare(b.item.type);

          if (typeComparison !== 0) {
            // If the types are not equal, return the comparison result
            return typeComparison;
          } else {
            // If the types are equal, compare the scores
            return a.score - b.score;
          }
        })
        .map((result) => options[result.refIndex]);
    },
    [fuse],
  );

  return { searchOptions, filterOptionsProp };
}
