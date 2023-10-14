export default function generatePaths(transferData) {
   const paths = [];

   transferData.forEach((transferArea) => {
      const areaLink = transferArea.link;
      const airport = transferArea.airportLink;

      transferArea.destinations.forEach((destination) => {
         const transferLink = destination.link;

         const path = {
            params: {
               airport: airport,
               area: areaLink,
               transfer: transferLink,
            },
         };

         paths.push(path);
      });
   });

   return paths;
}