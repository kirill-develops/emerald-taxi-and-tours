import getLocationId from '@hooks/getTripAdvisorLocationId';
import updateTourData from '../../data/controllers/updateTourData';

export default async function fetchLocationIdIfNeeded(tourParams) {
   if (!tourParams?.location_id) {
      const locationId = await getLocationId(tourParams);

      if (locationId) {
         const updatedTourParams = {
            ...tourParams,
            location_id: locationId
         };

         await updateTourData(updatedTourParams);

         return locationId;
      }
   }

   return tourParams?.location_id;
}