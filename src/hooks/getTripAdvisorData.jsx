import axios from 'axios';

const API_KEY = process.env.TRIP_ADVISOR_API_KEY;

async function getDetails(locationId) {
  const options = {
    method: 'GET',
    url: `https://api.content.tripadvisor.com/api/v1/location/${locationId}/details`,
    params: {
      key: API_KEY,
      language: 'en',
      currency: 'USD',
    },
    headers: { accept: 'application/json' },
  };

  try {
    const res = await axios.request(options);

    return res.data;
  } catch (err) {
    console.error(err.response.data);

    return null;
  }
}

async function getPhotos(locationId) {
  const options = {
    method: 'GET',
    url: `https://api.content.tripadvisor.com/api/v1/location/${locationId}/photos`,
    params: { key: API_KEY, language: 'en' },
    headers: { accept: 'application/json' },
  };

  try {
    const res = await axios.request(options);

    return res?.data?.data;
  } catch (err) {
    console.error(err.response.data);

    return null;
  }
}

async function getReviews(locationId) {
  const options = {
    method: 'GET',
    url: `https://api.content.tripadvisor.com/api/v1/location/${locationId}/reviews`,
    params: { key: API_KEY, language: 'en' },
    headers: { accept: 'application/json' },
  };

  try {
    const res = await axios.request(options);

    return res.data?.data;
  } catch (err) {
    console.error(err.response.data);

    return null;
  }
}

function isObjEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}

export default async function getTripAdvisorData(params, retryCount = 0) {
  if (retryCount >= 3) {
    return params;
  }

  let dataUpdated = false;

  const [details, photos, reviews] = await Promise.allSettled([
    isObjEmpty(params?.tripAdvisorDetails)
      ? getDetails(params.location_id)
      : null,
    isObjEmpty(params?.tripAdvisorPhotos)
      ? getPhotos(params.location_id)
      : null,
    isObjEmpty(params?.tripAdvisorReviews)
      ? getReviews(params.location_id)
      : null,
  ]);

  if (
    details.status === 'fulfilled' &&
    isObjEmpty(params?.tripAdvisorDetails)
  ) {
    params.tripAdvisorDetails = details.value ?? [];
    params.dataUpdated = new Date().toISOString();
    dataUpdated = true;
  }

  if (photos.status === 'fulfilled' && isObjEmpty(params?.tripAdvisorPhotos)) {
    params.tripAdvisorPhotos = photos.value ?? [];
    params.dataUpdated = new Date().toISOString();
    dataUpdated = true;
  }

  if (
    reviews.status === 'fulfilled' &&
    isObjEmpty(params?.tripAdvisorReviews)
  ) {
    params.tripAdvisorReviews = reviews.value ?? [];
    params.dataUpdated = new Date().toISOString();
    dataUpdated = true;
  }

  if (
    (!details.value ? !isObjEmpty(params.tripAdvisorDetails) : true) &&
    (!photos.value ? !isObjEmpty(params.tripAdvisorPhotos) : true) &&
    (!reviews.value ? !isObjEmpty(params.tripAdvisorReviews) : true)
  ) {
    return { params, dataUpdated };
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return getTripAdvisorData(params, retryCount + 1);
}
