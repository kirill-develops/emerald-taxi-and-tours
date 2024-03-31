import { promises as fs } from 'fs';
import { tourData } from './tour';

export default async function updateTourData(updatedTourParams = {}) {
   const updateSingleTour = (tour) =>
      tour.link === updatedTourParams.link ? updatedTourParams : tour;

   const updateMultipleTours = (tours) =>
      tours.map((tour) =>
         updatedTourParams.find((updatedTour) => updatedTour.link === tour.link) || tour
      );

   const isObject = typeof updatedTourParams === 'object';
   const isArrayOfObjects = isObject && Array.isArray(updatedTourParams);

   if (!isObject || (isObject && !isArrayOfObjects)) {
      throw new Error('Invalid parameter type. Expected object or array of objects.');
   }

   const updatedTourData = isArrayOfObjects
      ? updateMultipleTours(tourData)
      : tourData.map(updateSingleTour);


   const tourDataFileContent = JSON.stringify(updatedTourData);

   try {
      await fs.writeFile('src/data/tourData.json', tourDataFileContent);
   } catch (err) {
      console.error('Error updating tour data file:', err);
   }
}