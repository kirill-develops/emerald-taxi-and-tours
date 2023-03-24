import dayjs from 'dayjs';


export const transferInitialValues = {
  bookingStep: 0,
  isBookingOpen: false,
  flightDetails: {
    airline: '',
    flightNum: '',
    transferType: 'roundtrip',
    arrive: dayjs().add(1, 'day'),
    depart: dayjs().add(7, 'day'),
    passengers: 1,
    childPassengers: 0,
    accomName: '',
  },
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
    userConfirmed: false
  }
};


export const tourInitialValues = {
  bookingStep: 0,
  isBookingOpen: false,
  tourDetails: {
    tourDate: dayjs().add(1, 'day'),
    accomName: '',
    area: '',
    passengers: 1,
    childPassengers: 0,
  },
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
    userConfirmed: false
  }
};