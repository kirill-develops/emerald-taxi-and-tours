import Fuse from 'fuse.js';
import { useMemo } from 'react';
import { transferData } from '@data/transfers';
import { tourData } from '@data/controllers/tour';

export default function useSearchFilterOptions() {
  const transferOptions = useMemo(
    () =>
      transferData.flatMap(
        ({ name: areaName, destinations, link, airport, airportLink }) => {
          const options = destinations.map((destination) => {
            const name =
              destination.name === 'All Other Resorts, Villas, AirBnB & Homes'
                ? `All other options in ${areaName} <> ${airport}`
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
      tourData.map(({ name, link, area, type, starting_points }) => {
        const [startingPoint, startingParish] = starting_points.map(
          ({ name, parish }) => [name, parish],
        );

        const areaNoSpaces = area.replace(/ /, '_');

        const tourUrl = `/tours/${areaNoSpaces}/${link}`;

        return {
          name: `${name} in ${area}`,
          tourType: type,
          from: startingPoint,
          parish: startingParish,
          link: tourUrl,
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

      const adaptedSearchTerm = state.inputValue
        .split(' ')
        .map((word) => `${word}`)
        .join(' ');

      const results = fuse.search(adaptedSearchTerm);

      const { tourResults, transferResults } = results.reduce(
        (acc, result) => {
          if (result.item.type === 'Tours') {
            acc.tourResults.push(result);
          } else if (result.item.type === 'Transfers') {
            acc.transferResults.push(result);
          }
          return acc;
        },
        { tourResults: [], transferResults: [] },
      );

      tourResults.sort((a, b) => a.score - b.score);
      transferResults.sort((a, b) => a.score - b.score);

      const isTourFirst =
        tourResults.length > 0 &&
        transferResults.length > 0 &&
        tourResults[0]?.score < transferResults[0]?.score;

      const finalResults = isTourFirst
        ? [...tourResults, ...transferResults]
        : [...transferResults, ...tourResults];

      return finalResults.map((result) => options[result.refIndex]);
    },
    [fuse],
  );

  return { searchOptions, filterOptionsProp };
}
