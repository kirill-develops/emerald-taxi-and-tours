import { tourData } from "@data/controllers/tour";

const filterData = () => ({ setState, getState }) => {
   const { filterStartLocation, filterType, filterArea } = getState();
   const isStartLocFiltered = Object.values(filterStartLocation).some(val => val);
   const isTypeFiltered = Object.values(filterType).some(val => val);
   const isAreaFiltered = Object.values(filterArea).some(val => val);

   const filteredData = tourData.filter(item =>
      (!isStartLocFiltered || item.starting_points?.some((p) => filterStartLocation[p.link]))
      && (!isTypeFiltered || item.type.some((t) => filterType[t]))
      && (!isAreaFiltered || filterArea[item.area])
   );

   setState({ filteredData: filteredData.length > 0 ? filteredData : tourData });
}


export default filterData;