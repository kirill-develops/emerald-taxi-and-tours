import data from '@data/tourData.json'
import { cloneDeep } from 'lodash';


export const tourData = cloneDeep(data);

export const startingPoints = tourData
   .flatMap(tour => tour.starting_points)
   .reduce((uniqueStartingPoints, startingPoint) => {
      const { link, name, parish } = startingPoint;
      const existingPoint = uniqueStartingPoints.find(point => point.link === link);
      const image = require(`@../public/tour_pickup/${link}1.png`);

      if (!existingPoint) {
         return [...uniqueStartingPoints, {
            link,
            name,
            parish,
            image,
            total: 1,
         }];
      }
      existingPoint.total++;
      return uniqueStartingPoints;
   }, []);

export function filterToursByStartingPoint(startingPointUrl) {
   return tourData.filter((tour) =>
      tour.starting_points.some(({ link }) => link === startingPointUrl),
   )
}

export function extractProps(key, data = tourData) {
   const uniqueNames = new Set();
   const result = [];

   for (const obj of data) {
      const names = Array.isArray(obj[key]) ? obj[key] : [obj[key]];

      for (const name of names) {
         const keyName = key === 'starting_points' ? name.link : name;

         if (!uniqueNames.has(keyName)) {
            uniqueNames.add(keyName);

            if (key === 'starting_points') {
               result.push({ name: name.name, link: name.link });
            } else {
               result.push(name);
            }
         }
      }
   }

   result.sort(key === 'starting_points' ? (a, b) => a.name.localeCompare(b.name) : undefined);

   return result;
}