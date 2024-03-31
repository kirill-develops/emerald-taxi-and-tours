import { tourData } from "../../data/controllers/tour";
import updateTourData from "../../data/controllers/updateTourData";

export default async function convertTourPrice() {
   try {
      const updatedTourData = tourData.map(tour => ({
         ...tour,
         starting_points: tour.starting_points.map(startingPoint => {
            const { price, stripeId, ...rest } = startingPoint;
            const updatedStartingPoint = {
               ...rest,
               basePrice: { value: price * 4, stripeId: `${stripeId}_base_price` },
               plusOnePrice: { value: price, stripeId: `${stripeId}_plus_one_price` }
            };

            return updatedStartingPoint;
         })
      })
      )


      await updateTourData(updatedTourData);
   } catch (err) {
      throw new Error(`Error converting tour price: ${err.message}`);
   }
}


