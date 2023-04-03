import * as Yup from 'yup';
import dayjs from 'dayjs';
import { validatePhoneNumberLength } from 'libphonenumber-js';


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
    passengers: Yup.number()
      .integer('Invalid # of passengers')
      .positive('Invalid # of passengers')
      .min(1, 'Invalid # of passengers')
      .max(20, 'Cannot transport this many passengers')
      .required('Invalid # of passengers'),
    childPassengers: Yup.number()
      .integer('Invalid # of passengers')
      .min(0, 'Invalid # of passengers')
      .when(['passengers'], ([passengers], schema) => (
        schema
          .max(passengers - 1, 'Cannot exceed total # of passengers')
      )),
    accomName: Yup.string().required('Accommodation name is required'),
  })
});


const tourDetailsValidationSchema = Yup.object({
  tourDetails: Yup.object().shape({
    date: Yup.date().required('Tour date is required')
      .min(dayjs().subtract(1, 'days'), 'Tour Date cannot be before today'),
    time: Yup.date().when('date', {
      is: (date) => date && dayjs(date).isSame(dayjs(), 'day'),
      then: schema => schema
        .min(dayjs().add(3, 'hours'), 'Tour time must be at least 3 hours in advance')
        .required('Tour time is required'),
      otherwise: schema => schema.required('Tour time is required'),
    }),
    accomName: Yup.string().required('Accommodation name is required'),
    area: Yup.string().required('Area is required'),
    passengers: Yup.number()
      .integer('Invalid # of passengers')
      .positive('Invalid # of passengers')
      .min(1, 'Invalid # of passengers')
      .max(20, 'Cannot transport this many passengers')
      .required('Invalid # of passengers'),
    childPassengers: Yup.number()
      .integer('Invalid # of passengers')
      .min(0, 'Invalid # of passengers')
      .when(['passengers'], ([passengers], schema) => (
        schema
          .max(passengers - 1, 'Cannot exceed total # of passengers')
      )),
  })
})


const personalDetailsValidationSchema = Yup.object({
  personalDetails: Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    emailConfirm: Yup.string()
      .test('email-match', 'Emails must match', (value) => {
        return value === Yup.ref('email');
      })
      .required('Email confirmation is required'),
    country: Yup.string().required('Country is required'),
    mobile: Yup.string()
      .required('Mobile number is required')
      .transform(value => (value ? value.replace(/[^0-9]/g, '') : ''))
      .test('isValidPhoneNumberLength', 'Invalid phone number length for the selected country', function (value) {
        if (!value) {
          return true; // Pass if value is not present
        }

        const { country } = this.parent;
        const validationError = validatePhoneNumberLength(value, country);

        switch (validationError) {
          case 'NOT_A_NUMBER':
            return this.createError({ message: 'Invalid characters in phone number' });
          case 'INVALID_COUNTRY':
            return this.createError({ message: 'Invalid country for phone number' });
          case 'TOO_SHORT':
            return this.createError({ message: 'Phone number is too short' });
          case 'INVALID_LENGTH':
            return this.createError({ message: 'Invalid phone number length' });
          case 'TOO_LONG':
            return this.createError({ message: 'Phone number is too long' });
          case undefined:
            return true;
          default:
            return true;
        }
      })
  })
});


const paymentDetailsValidationSchema = Yup.object({
  paymentDetails: Yup.object().shape({
    paymentAuthorized: Yup.boolean().oneOf([true], 'You must authorize payment'),
  })
});


const confirmDetailsValidationSchema = Yup.object({
  confirmDetails: Yup.object().shape({
    userConfirmed: Yup.boolean().oneOf([true], 'You must confirm the details'),
  })
});


export function getCurrentValidationSchema(bookingStep, formType) {
  switch (bookingStep) {
    case 0:
      return formType === 'transfer'
        ? flightDetailsValidationSchema : tourDetailsValidationSchema;

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