import data from '@data/transferData.json'

export const transferData = structuredClone(data);

const filterTransfersByAirport = (passedAirportLink) =>
   transferData.filter(({ airportLink }) => passedAirportLink === airportLink);

const filterTransfersByArea = passedAreaLink => transferData.find(({ link }) => passedAreaLink === link)

transferData.filterByArea = filterTransfersByArea;
transferData.filterByAirport = filterTransfersByAirport;