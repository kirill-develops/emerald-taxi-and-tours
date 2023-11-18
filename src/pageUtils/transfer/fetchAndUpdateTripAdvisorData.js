import getTripAdvisorData from '@hooks/getTripAdvisorData';
import updateTransferData from "../../data/controllers/updateTransferData";
import { isDataOld } from '../../helperFunctions';

export default async function fetchAndUpdateTripAdvisorData(
   transferParams,
   locationId,
) {
   const isOldData = isDataOld(transferParams.dateUpdated);

   if (locationId && (
      isOldData ||
      !transferParams?.tripAdvisorDetails ||
      !transferParams?.tripAdvisorPhotos ||
      !transferParams?.tripAdvisorReviews)
   ) {
      const transferProp = locationId
         ? { ...transferParams, location_id: locationId }
         : transferParams;


      const { params: updatedParams, dataUpdated: isDataUpdated } =
         await getTripAdvisorData(transferProp);

      if (isDataUpdated) {
         await updateTransferData(updatedParams);

         return updatedParams;
      }
   }

   return transferParams;
}