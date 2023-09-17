import getTripAdvisorData from '@hooks/getTripAdvisorData';
import updateTransferData from "./updateTransferData";

export default async function fetchAndUpdateTripAdvisorData(
   transferParams,
   locationId,
   areaData
) {
   const timeWindow = 48 * 60 * 60 * 1000; // 48 Hours //! change to 12 hours when live
   const isOldData =
      Date.now() - new Date(transferParams.dateUpdated).getTime() > timeWindow;

   if (
      (!locationId || isOldData) &&
      (!transferParams?.tripAdvisorDetails ||
         !transferParams?.tripAdvisorPhotos ||
         !transferParams?.tripAdvisorReviews)
   ) {
      const transferProp = locationId
         ? transferParams
         : { ...transferParams, location_id: locationId };

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