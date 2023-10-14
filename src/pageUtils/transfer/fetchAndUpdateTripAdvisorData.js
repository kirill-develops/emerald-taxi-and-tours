import getTripAdvisorData from '@hooks/getTripAdvisorData';
import updateTransferData from "./updateTransferData";

function isDataOld(dateUpdated) {
   const timeWindow = 48 * 60 * 60 * 1000; // 48 Hours //! change to 12 hours when live

   return Date.now() - new Date(dateUpdated).getTime() > timeWindow;
}

export default async function fetchAndUpdateTripAdvisorData(
   transferParams,
   locationId,
   areaData
) {
   const isOldData = isDataOld(transferParams.dateUpdated)
   if (
      isOldData ||
      !transferParams?.tripAdvisorDetails ||
      !transferParams?.tripAdvisorPhotos ||
      !transferParams?.tripAdvisorReviews
   ) {
      const transferProp = locationId
         ? { ...transferParams, location_id: locationId }
         : transferParams;


      const { params: updatedParams, dataUpdated: isDataUpdated } =
         await getTripAdvisorData(transferProp);

      if (isDataUpdated) {
         const finishedTransferParams = {
            ...updatedParams,
            area: areaData,
         };

         await updateTransferData(finishedTransferParams);

         return finishedTransferParams;
      }
   }

   return transferParams;
}