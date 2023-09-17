import getLocationId from '@hooks/getTripAdvisorLocationId';
import updateTransferData from "./updateTransferData";

export default async function fetchLocationIdIfNeeded(transferParams, areaData) {
   if (!transferParams?.location_id) {
      const locationIdProp = { ...transferParams, area: areaData?.name };
      const locationId = await getLocationId(locationIdProp);

      if (locationId) {
         const updatedTransferParams = {
            ...transferParams,
            location_id: locationId,
            area: areaData,
         };

         await updateTransferData(updatedTransferParams);

         return locationId;
      }
   }

   return null;
}