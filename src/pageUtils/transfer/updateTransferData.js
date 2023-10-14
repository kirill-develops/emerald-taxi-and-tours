import transferData from '@data/transferData.json';
import { promises as fs } from 'fs';

export default async function updateTransferData({
   area: { link: areaLink, airportLink },
   ...transferParams
} = {}) {
   const { link: transferLink } = transferParams;

   const updatedArea = transferData.find(
      (area) => area.link === areaLink && area.airportLink === airportLink,
   );

   const updatedDestinationsData = updatedArea.destinations.map(
      (destination) => {
         if (destination.link === transferLink) {
            return transferParams;
         }

         return destination;
      },
   );

   const updatedAreaData = {
      ...updatedArea,
      destinations: updatedDestinationsData,
   };

   const updatedTransferData = transferData.map((area) =>
      area.link === areaLink ? updatedAreaData : area,
   );

   const transferDataFileContent = JSON.stringify(updatedTransferData);

   try {
      await fs.writeFile('src/data/transferData.json', transferDataFileContent);
   } catch (err) {
      console.error('Error updating transfer data file:', err);
   }
}