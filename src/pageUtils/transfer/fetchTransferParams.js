import { transferData } from "@data/controllers/transfer";


export default async function fetchTransferParams(params) {
   const transferAirport = transferData.filterByAirport(params.airport);

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

   const param = transferArea?.destinations.find(
      (destination) => destination.link === params.transfer,
   );

   if (!param) {
      return {
         notFound: true,
      };
   }

   const { destinations, ...areaData } = transferArea;

   const transferParams = { ...param, area: areaData }

   return transferParams;
}