import data from '@data/transferData.json'
import { cloneDeep } from 'lodash';

export const transferData = cloneDeep(data);

const filterTransfersByAirport = (passedAirportLink) =>
   transferData.filter(({ airportLink }) => passedAirportLink === airportLink);

const filterTransfersByArea = passedAreaLink => transferData.find(({ link }) => passedAreaLink === link)

transferData.filterByArea = filterTransfersByArea;
transferData.filterByAirport = filterTransfersByAirport;