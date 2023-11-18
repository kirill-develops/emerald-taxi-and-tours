import { promises as fs } from 'fs';
import { transferData } from './transfer';

export default async function updateTransferData({
   area: { link: areaLink, airportLink } = {},
   ...transferParams }) {
   const { link: destinationLink } = transferParams;

   const updatedTransferData = transferData.map(area => {
      if (area.link === areaLink && area.airportLink === airportLink) {
         const updatedDestinationsData = area.destinations.map(destination =>
            destination.link === destinationLink ?
               transferParams : destination)

         return { ...area, destinations: updatedDestinationsData };
      } else {
         return area;
      }
   })

   const transferDataFileContent = JSON.stringify(updatedTransferData);

   try {
      await fs.writeFile('src/data/transferData.json', transferDataFileContent);
   } catch (err) {
      console.error('Error updating transfer data file:', err);
   }
}