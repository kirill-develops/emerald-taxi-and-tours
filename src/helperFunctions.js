import dayjs from 'dayjs';
import transferData from '@data/transferData.json';

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function checkDate(dataDate, initialDate) {
  const isDataBeforeInitial = dayjs(dataDate)
    .startOf('day')
    .isBefore(dayjs(initialDate).startOf('day'));

  return isDataBeforeInitial ? initialDate : dayjs(dataDate).format();
}

export function checkTime(dataTime, initialTime) {
  const isDataBeforeInitial = dayjs(dataTime)
    .startOf('minute')
    .isBefore(dayjs(initialTime).startOf('minute'));

  return isDataBeforeInitial ? initialTime : dayjs(dataTime).format();
}

export function checkDepartDate(dataDate, initialDate, departDate) {
  const isDataBeforeInitial = dayjs(dataDate).isBefore(dayjs(initialDate));

  return isDataBeforeInitial ? departDate : dayjs(dataDate).format();
}

export const filterTransferData = (passedAirportLink) =>
  transferData.filter(({ airportLink }) => passedAirportLink === airportLink);