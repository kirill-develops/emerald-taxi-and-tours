import Head from 'next/head';
import { promises as fs } from 'fs';
import { useRouter } from 'next/router';
import React from 'react';
import transferData from '@data/transferData.json';
import Fallback from '@components/Fallback';
import PageLayout from '@components/PageLayout/Layout';
import FormContextProvider from '@context/FormContextProvider';
import getLocationId from '@hooks/getTripAdvisorLocationId';
import getTripAdvisorData from '@hooks/getTripAdvisorData';
import DetailedPageLayout from '@components/DetailedPageLayout/DetailedPageLayout';

export async function getStaticPaths() {
  function generatePaths(transferData) {
    const paths = [];

    transferData.forEach((transferArea) => {
      const areaLink = transferArea.link;
      const airport = transferArea.airportLink;

      transferArea.destinations.forEach((destination) => {
        const transferLink = destination.link;

        const path = {
          params: {
            airport: airport,
            area: areaLink,
            transfer: transferLink,
          },
        };

        paths.push(path);
      });
    });

    return paths;
  }

  const paths = generatePaths(transferData);

  return { paths, fallback: true };
}

async function updateTransferData({
  area: { link: areaLink, airportLink },
  ...transferParams
} = {}) {
  const { link: transferLink } = transferParams;

  const updatedArea = transferData.find(
    (area) => area.link === areaLink && area.airportLink === airportLink,
  );

  const updatedDestinationsData = updatedArea.destinations.map(
    (destination) => {
      if (destination.link === transferLink) {
        return transferParams;
      }

      return destination;
    },
  );

  const updatedAreaData = {
    ...updatedArea,
    destinations: updatedDestinationsData,
  };

  const updatedTransferData = transferData.map((area) =>
    area.link === areaLink ? updatedAreaData : area,
  );

  const transferDataFileContent = JSON.stringify(updatedTransferData);

  try {
    await fs.writeFile('src/data/transferData.json', transferDataFileContent);
  } catch (err) {
    console.error('Error updating transfer data file:', err);
  }
}

export async function getStaticProps({ params }) {
  const transferAirport = transferData.filter(
    (transferArea) => transferArea.airportLink === params.airport,
  );

  if (!transferAirport) {
    return {
      notFound: true,
    };
  }

  const transferArea = transferAirport.find(
    (transferArea) => transferArea.link === params.area,
  );

  if (!transferArea) {
    return {
      notFound: true,
    };
  }

  const transferParams = transferArea?.destinations.find(
    (destination) => destination.link === params.transfer,
  );

  if (!transferParams) {
    return {
      notFound: true,
    };
  }

  const { destinations, ...areaData } = transferArea;

  let locationId;

  if (!transferParams?.location_id) {
    const locationIdProp = { ...transferParams, area: areaData?.name };

    locationId = await getLocationId(locationIdProp);

    if (locationId) {
      const updatedTransferParams = {
        ...transferParams,
        location_id: locationId,
        area: areaData,
      };

      await updateTransferData(updatedTransferParams);
    }
  }

  const timeWindow = 48 * 60 * 60 * 1000; // 48 Hours //! change to 12 hours when live
  const isOldData =
    Date.now() - new Date(transferParams.dateUpdated).getTime() > timeWindow;

  let updatedTransferParams = transferParams;

  if (
    (transferParams.location_id || locationId) &&
    (!transferParams?.tripAdvisorDetails ||
      !transferParams?.tripAdvisorPhotos ||
      !transferParams?.tripAdvisorReviews ||
      isOldData)
  ) {
    const transferProp = transferParams.location_id
      ? transferParams
      : { ...transferParams, location_id: locationId };

    const { params: updatedParams, dataUpdated: isDataUpdated } =
      await getTripAdvisorData(transferProp);

    if (isDataUpdated) {
      const finishedTransferParams = {
        ...updatedParams,
        area: areaData,
      };

      await updateTransferData(finishedTransferParams);

      updatedTransferParams = finishedTransferParams;
    }
  }

  const paramsData = { ...updatedTransferParams, area: areaData };

  return {
    props: {
      params: paramsData,
    },
    revalidate: 43200,
  };
}

function DynamicTransfer({ params }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  const contextParams = { ...params, type: 'transfer' };

  return (
    <>
      <Head>
        <title>
          Transfers: {params.name}, {params.area.name} & {params.area.airport}|
          EMERALD Taxi & Tours
        </title>
      </Head>
      <PageLayout
        title={params.name}
        subheader={params.area.name}
        airport={params.area.airport}
      >
        <FormContextProvider value={contextParams}>
          <DetailedPageLayout />
        </FormContextProvider>
      </PageLayout>
    </>
  );
}

export default DynamicTransfer;
