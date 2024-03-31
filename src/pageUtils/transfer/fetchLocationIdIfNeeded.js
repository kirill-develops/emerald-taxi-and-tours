import getLocationId from '@hooks/getTripAdvisorLocationId';
import updateTransferData from '../../data/controllers/updateTransferData';

export default async function fetchLocationIdIfNeeded(transferParams) {
   if (!transferParams?.location_id) {
      const area = transferParams.area.link === 'all_regions'
         ? transferParams.name
         : transferParams.area.link;

      const areaString = `${area}, Jamaica`

      const locationIdProp = { ...transferParams, area: areaString };

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