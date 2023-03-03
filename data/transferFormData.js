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



const flightDetailsValidationSchema = Yup.object().shape({
  flightDetails: Yup.object().shape({
    airline: Yup.string().required('Airline is required'),
    flightNum: Yup.number()
      .integer('Invalid Flight Number')
      .positive('Invalid Flight Number')
      .min(100, 'Must be at least 3 digits')
      .max(9999, 'Must be less than 5 digits')
      .required('Flight number is required'),
    transferType: Yup.string()
      .required('Transfer type is required'),
    arrive: Yup.mixed().when('transferType', {
      is: 'roundtrip',
      then: schema => schema
        .required('Arrival date is required')
        .test('after-current-time', 'Cannot be before today', value => dayjs(value).isAfter(dayjs()))
        .test('before-depart-time', 'Must be before departure', function (value) {
          const arriveDate = dayjs(value);
          const departDate = dayjs(this.parent.depart);
          return departDate && arriveDate.isBefore(departDate);
        }),
      otherwise: (schema) => schema.required('Arrival date is required')
        .test('after-current-time', 'Cannot be before today', value => dayjs(value).isAfter(dayjs()))
      ,
    }),
    depart: Yup.mixed().when('transferType', {
      is: 'roundtrip',
      then: schema => schema
        .required('Departure date is required')
        .test('after-current-time', 'Cannot be before today', value => dayjs(value).isAfter(dayjs()))
        .test('after-arrive-time', 'Must be after arrival', function (value) {
          const departDate = dayjs(value);
          const arriveDate = dayjs(this.parent.arrive);
          return arriveDate && departDate.isAfter(arriveDate);
        }),
      otherwise: schema => schema.required('Departure date is required')
        .test('after-current-time', 'Cannot be before today', value => dayjs(value).isAfter(dayjs()))
      ,
    }),
    accomName: Yup.string().required('Accommodation name is required'),
  })
});

export const personalDetailsValidationSchema = Yup.object({
  personalDetails: Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    emailConfirm: Yup.string()
      .test('email-match', 'Emails must match', function (value) {
        return value === Yup.ref('email');
      })
      .required('Email confirmation is required'),
    country: Yup.string().required('Country is required'),
    mobile: Yup.string()
      .required('Mobile number is required')
      .transform(value => (value ? value.replace(/[^0-9]/g, '') : ''))
      .matches(/^[0-9]{10,}$/, 'Mobile number must have at least 10 digits'),
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