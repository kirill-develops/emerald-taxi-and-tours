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

export default async function getTripAdvisorData(
  tourParams,
  dataUpdated,
  retryCount = 0,
) {
  if (retryCount >= 3) {
    return tourParams;
  }

  const [details, photos, reviews] = await Promise.allSettled([
    isObjEmpty(tourParams?.tripAdvisorDetails)
      ? getDetails(tourParams.location_id)
      : null,
    isObjEmpty(tourParams?.tripAdvisorPhotos)
      ? getPhotos(tourParams.location_id)
      : null,
    isObjEmpty(tourParams?.tripAdvisorReviews)
      ? getReviews(tourParams.location_id)
      : null,
  ]);

  if (
    details.status === 'fulfilled' &&
    isObjEmpty(tourParams?.tripAdvisorDetails)
  ) {
    tourParams.tripAdvisorDetails = details.value ?? [];
    tourParams.dataUpdated = new Date().toISOString();
    dataUpdated = true;
  }

  if (
    photos.status === 'fulfilled' &&
    isObjEmpty(tourParams?.tripAdvisorPhotos)
  ) {
    tourParams.tripAdvisorPhotos = photos.value ?? [];
    tourParams.dataUpdated = new Date().toISOString();
    dataUpdated = true;
  }

  if (
    reviews.status === 'fulfilled' &&
    isObjEmpty(tourParams?.tripAdvisorReviews)
  ) {
    tourParams.tripAdvisorReviews = reviews.value ?? [];
    tourParams.dataUpdated = new Date().toISOString();
    dataUpdated = true;
  }

  if (
    (!details.value ? !isObjEmpty(tourParams.tripAdvisorDetails) : true) &&
    (!photos.value ? !isObjEmpty(tourParams.tripAdvisorPhotos) : true) &&
    (!reviews.value ? !isObjEmpty(tourParams.tripAdvisorReviews) : true)
  ) {
    return { tourParams, dataUpdated };
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return getTripAdvisorData(tourParams, dataUpdated, retryCount + 1);
}
