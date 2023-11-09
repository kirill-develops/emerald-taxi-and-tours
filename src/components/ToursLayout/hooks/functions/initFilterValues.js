import { tourData } from "@data/controllers/tour";

function initFilterValues(data, key) {
   return data.reduce((result, obj) => {
      const names = Array.isArray(obj[key]) ? obj[key] : [obj[key]];

      names.forEach((name) => {
         const id = key === 'starting_points' ? name.link : name;

         if (!result[id]) {
            result[id] = false;
         }
      });

      return result;
   }, {});
};

export default function initAllFilterValues() {
   const initFilterStartLocation = initFilterValues(tourData, 'starting_points');
   const initFilterType = initFilterValues(tourData, 'type');
   const initFilterArea = initFilterValues(tourData, 'area');

   return { initFilterStartLocation, initFilterType, initFilterArea }
};