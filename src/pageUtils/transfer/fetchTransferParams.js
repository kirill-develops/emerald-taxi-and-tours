import transferData from '@data/transferData.json';


export default async function fetchTransferParams(params) {
   const transferAirport = transferData.filter(
      (transferArea) => transferArea.airportLink === params.airport,
   );

   if (!transferAirport) {
      return {
         notFound: true,
      };
   }

   const transferArea = transferAirport.find(
      (transferArea) => transferArea.link === params.area,
   );

   if (!transferArea) {
      return {
         notFound: true,
      };
   }

   const transferParams = transferArea?.destinations.find(
      (destination) => destination.link === params.transfer,
   );

   if (!transferParams) {
      return {
         notFound: true,
      };
   }

   const { destinations, ...areaData } = transferArea;

   return { transferParams, areaData }
}