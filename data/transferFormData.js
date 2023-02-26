import * as Yup from 'yup';
import dayjs from 'dayjs';
import FormFlightDetails from '@Form/FormFlightDetails';
import FormPersonalDetails from '@Form/FormPersonalDetails';
import FormPaymentDetails from '@Form/FormPaymentDetails';
import FormConfirmDetails from '@Form/FormConfirmDetails';

export const transferInitialValues = {
  bookingStep: 0,
  isBookingOpen: false,
  flightDetails: {
    airline: '',
    flightNum: '',
    transferType: 'roundtrip',
    arrive: dayjs().add(1, 'day'),
    depart: dayjs().add(7, 'day'),
    accomName: '',
  },
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    mobile: '',
  },
  paymentDetails: {
    paymentAuthorized: false,
  },
  confirmDetails: {
    userConfirmed: false
  }
};

export const flightDetailsValidationSchema = Yup.object({
  flightDetails: Yup.object().shape({
    airline: Yup.string().required('Airline is required'),
    flightNum: Yup.string().required('Flight number is required'),
    transferType: Yup.string().required('Transfer type is required'),
    arrive: Yup.date().required('Arrival date is required'),
    depart: Yup.date().required('Departure date is required'),
    accomName: Yup.string().required('Accommodation name is required'),
  })
});

export const personalDetailsValidationSchema = Yup.object({
  personalDetails: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    emailConfirm: Yup.string()
      .oneOf([Yup.ref('email'), null], 'Emails must match')
      .required('Email confirmation is required'),
    mobile: Yup.string().required('Mobile number is required'),
  })
});

export const paymentDetailsValidationSchema = Yup.object({
  paymentDetails: Yup.object().shape({
    paymentAuthorized: Yup.boolean().oneOf([true], 'You must authorize payment'),
  })
});

export const confirmDetailsValidationSchema = Yup.object({
  confirmDetails: Yup.object().shape({
    userConfirmed: Yup.boolean().oneOf([true], 'You must confirm the details'),
  })
});

export const transferSteps = [
  {
    label: 'Flight Details',
    link: 'flightDetails',
    component: <FormFlightDetails />,
  },
  {
    label: 'Personal Details',
    link: 'personalDetails',
    component: <FormPersonalDetails />,
  },
  {
    label: 'Payment Options',
    link: 'paymentDetails',
    component: <FormPaymentDetails />,
  },
  {
    label: 'Confirm',
    link: 'confirmDetails',
    component: <FormConfirmDetails />,
  },
];

export function useTransferDataByKey(keys) {
  if (!Array.isArray(keys)) {
    keys = [keys]
  }

  return transferSteps.map((data) =>
    keys.reduce((accumulator, key) => {
      return ({
        ...accumulator,
        [key]: data[key]?.toString
          ? data[key].toString() : data[key]
      })
    }, [])
  );
}

export function getCurrentValidationSchema(bookingStep) {
  switch (bookingStep) {
    case 0:
      return flightDetailsValidationSchema;

    case 1:
      return personalDetailsValidationSchema;

    case 2:
      return paymentDetailsValidationSchema;

    case 3:
      return confirmDetailsValidationSchema;

    default:
      return flightDetailsValidationSchema;
  };
};