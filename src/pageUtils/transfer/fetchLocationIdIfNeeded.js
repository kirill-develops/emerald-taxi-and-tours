import getLocationId from '@hooks/getTripAdvisorLocationId';
import updateTransferData from '../../data/controllers/updateTransferData';

export default async function fetchLocationIdIfNeeded(transferParams) {
   if (!transferParams?.location_id) {
      const locationIdProp = { ...transferParams, area: transferParams?.area?.name };

      const locationId = await getLocationId(locationIdProp);

      if (locationId) {
         const updatedTransferParams = {
            ...transferParams,
            location_id: locationId,
         };

         await updateTransferData(updatedTransferParams);

         return locationId;
      }
   }

   return transferParams?.location_id;
}