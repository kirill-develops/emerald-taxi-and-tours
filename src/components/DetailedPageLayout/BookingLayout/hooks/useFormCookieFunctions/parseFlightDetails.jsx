import { checkDepartDate, checkTime } from '@helperFunctions';

export const parseFlightDetails = (data, initialValues) => {
  const {
    arrive: initialArrive,
    depart: initialDepart,
    accomName,
  } = initialValues.flightDetails;

  const { arrive: dataArrive, depart: dataDepart } = data?.flightDetails ?? {};

  return {
    ...initialValues.flightDetails,
    ...data?.flightDetails,
    accomName: accomName,
    arrive: dataArrive ? checkTime(dataArrive, initialArrive) : initialArrive,
    depart: dataDepart
      ? checkDepartDate(dataDepart, initialArrive, initialDepart)
      : initialDepart,
  };
};
