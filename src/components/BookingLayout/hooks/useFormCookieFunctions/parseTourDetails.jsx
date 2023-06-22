import { checkDate, checkTime } from '@helperFunctions';

export const parseTourDetails = (data, initialValues) => {
  const { date: initialTourDate, time: initialTourTime } =
    initialValues.tourDetails;

  const { date: dataTourDate, time: dataTourTime } = data?.tourDetails ?? {};

  return {
    ...initialValues.tourDetails,
    ...data?.tourDetails,
    date: dataTourDate
      ? checkDate(dataTourDate, initialTourDate)
      : initialTourDate,
    time: dataTourTime
      ? checkTime(dataTourTime, initialTourTime)
      : initialTourTime,
  };
};
