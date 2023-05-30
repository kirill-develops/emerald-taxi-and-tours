import axios from 'axios';

const API_KEY = process.env.TRIP_ADVISOR_API_KEY;

export default async function getLocationId(tourParams) {
  const searchQuery = tourParams?.name?.replace(/ /g, '%20');
  const category = tourParams?.type[0];
  const address = tourParams?.area?.replace(/ /g, '%20');

  const options = {
    method: 'GET',
    url: 'https://api.content.tripadvisor.com/api/v1/location/search',
    params: {
      key: API_KEY,
      searchQuery,
      category,
      address,
      language: 'en',
    },
    headers: { accept: 'application/json' },
  };

  try {
    const res = await axios.request(options);

    return res.data.data[0]?.location_id;
  } catch (err) {
    console.error(err);

    return null;
  }
}
