import { promises as fs } from 'fs';
import { tourData } from './tour';

export default async function updateTourData(updatedTourParams = {}) {
   const updatedTourData = tourData.map((tour) =>
      tour.link === updatedTourParams.link ? updatedTourParams : tour,
   );

   const tourDataFileContent = JSON.stringify(updatedTourData);

   try {
      await fs.writeFile('src/data/tourData.json', tourDataFileContent);
   } catch (err) {
      console.error('Error updating tour data file:', err);
   }
}