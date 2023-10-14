import dayjs from 'dayjs';

export const transferStartDate = dayjs().add(6, 'hours').format();
export const transferEndDate = dayjs().add(7, 'day').format();
export const tourDate = dayjs().add(3, 'hours').format();

const commonInitialValues = {
  bookingStep: 0,
  isBookingOpen: false,
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    country: 'US',
    mobile: '',
  },
  paymentDetails: {
    paymentAuthorized: false,
  },
  confirmDetails: {
    userConfirmed: false,
  },
};

export const getTransferInitialValues = (accomName = '') => ({
  ...commonInitialValues,
  flightDetails: {
    airline: '',
    flightNum: '',
    transferType: 'roundtrip',
    arrive: transferStartDate,
    depart: transferEndDate,
    passengers: 1,
    childPassengers: 0,
    accomName: accomName,
  },
});

export const tourInitialValues = {
  ...commonInitialValues,
  tourDetails: {
    date: tourDate,
    time: tourDate,
    accomName: '',
    area: '',
    passengers: 1,
    childPassengers: 0,
  },
};