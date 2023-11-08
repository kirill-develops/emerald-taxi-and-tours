import data from '@data/tourData.json'


export const tourData = structuredClone(data);


export function extractProps(key, data = tourData) {
   const uniqueNames = new Set();
   const result = [];

   for (const obj of data) {
      const names = Array.isArray(obj[key]) ? obj[key] : [obj[key]];

      for (const name of names) {
         const keyName = key === 'starting_points' ? name.link : name;

         if (!uniqueNames.has(keyName)) {
            uniqueNames.add(keyName);

            if (key === 'starting_points') {
               result.push({ name: name.name, link: name.link });
            } else {
               result.push(name);
            }
         }
      }
   }

   result.sort(key === 'starting_points' ? (a, b) => a.name.localeCompare(b.name) : undefined);

   return result;
}