export function generateAllTransferPaths(transferData) {
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

export function generateAllTourPaths(tourData) {
   const paths = [];

   tourData.forEach((tour) => {
      const path = {
         params: {
            area: tour.area_link,
            tour: tour.link,
         },
      };

      paths.push(path);
   });

   return paths;
}