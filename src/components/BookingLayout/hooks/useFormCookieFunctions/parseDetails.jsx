import { checkDepartDate, checkTime, checkDate } from '@helperFunctions';

export default function parseDetails(data, initialValues, type) {
  const initialDetails = initialValues[`${type}Details`];
  const dataDetails = data?.[`${type}Details`] || {};

  const {
    arrive: initialArrive,
    depart: initialDepart,
    accomName,
    date: initialTourDate,
    time: initialTourTime,
  } = initialDetails || {};
  const {
    arrive: dataArrive,
    depart: dataDepart,
    date: dataTourDate,
    time: dataTourTime,
  } = dataDetails || {};

  const parsedArrive = dataArrive
    ? checkTime(dataArrive, initialArrive)
    : initialArrive;
  const parsedDepart = dataDepart
    ? checkDepartDate(dataDepart, initialArrive, initialDepart)
    : initialDepart;

  const parsedTourDate = dataTourDate
    ? checkDate(dataTourDate, initialTourDate)
    : initialTourDate;

  const parsedTourTime = dataTourTime
    ? checkTime(dataTourTime, initialTourTime)
    : initialTourTime;

  const parsedDetails =
    type === 'flight'
      ? {
          ...initialDetails,
          ...dataDetails,
          accomName,
          arrive: parsedArrive,
          depart: parsedDepart,
        }
      : {
          ...initialDetails,
          ...dataDetails,
          date: parsedTourDate,
          time: parsedTourTime,
        };

  return parsedDetails;
}
