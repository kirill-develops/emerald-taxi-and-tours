import dayjs from 'dayjs';

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

export function isObjEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}

export function isDataOld(dateUpdated) {
  const timeWindow = 48 * 60 * 60 * 1000; // 48 Hours //! change to 12 hours when live

  return Date.now() - new Date(dateUpdated).getTime() > timeWindow;
}

export function checkUnrecognizedProps(componentName, props) {
  if (!props || typeof props !== 'object') {
    return;
  };

  const unrecognizedProps = Object.keys(props);

  if (unrecognizedProps.length > 0) {
    const quotedProps = unrecognizedProps.map(prop => `'${prop}'`);

    console.error(`Error: ${componentName} received unrecognized props: ${quotedProps.join(', ')}`);
  }
};