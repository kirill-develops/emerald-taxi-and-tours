import { tourData } from '@data/controllers/tour';

export default async function fetchTourParams(params) {
   const { tour: tourParam, area: areaParam } = params;
   const isCurrentTour = (tour) =>
      tourParam === tour.link && areaParam === tour.area_link;

   if (!areaParam || !tourParam) {
      return { notFound: true };
   }

   const tourParams = tourData.find(isCurrentTour);

   if (!tourParams) {
      return { notFound: true };
   }

   return tourParams;
}