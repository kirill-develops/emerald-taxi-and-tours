import getTripAdvisorData from '@hooks/getTripAdvisorData';
import updateTourData from '../../data/controllers/updateTourData';
import { isDataOld } from '../../helperFunctions';


export default async function fetchAndUpdateTripAdvisorData(tourParams, locationId) {
   const isOldData = isDataOld(tourParams?.isDataUpdated);

   if (
      isOldData ||
      !tourParams?.tripAdvisorDetails ||
      !tourParams?.tripAdvisorPhotos ||
      !tourParams?.tripAdvisorReviews
   ) {
      const tourProp = locationId
         ? { ...tourParams, location_id: locationId }
         : tourParams;

      const { params: updatedTourParams, dataUpdated: isDataUpdated } =
         await getTripAdvisorData(tourProp);

      if (isDataUpdated) {
         await updateTourData(updatedTourParams);

         return updatedTourParams;
      }
   }

   return tourParams
}