import * as Yup from 'yup';
import dayjs from 'dayjs';


export const transferSteps = [
  'Flight Details',
  'Personal Details',
  'Payment Options',
  'Checkout',
];

export const transferInitialValues = {
  airline: '',
  flightNum: '',
  transferType: 'roundtrip',
  arrive: dayjs().add(1, 'day'),
  depart: dayjs().add(7, 'day'),
  accomName: '',
  name: '',
  email: '',
};

export const validationSchema = Yup.object().shape({
  airline: Yup.string().required('* Required'),
  flightNum: Yup.number().required('* Required'),
  accomName: Yup.string().required('* Required'),
  name: Yup.string().required('* Required'),
  email: Yup.string().required('Required').email('Invalid email address'),
  arrive: Yup.mixed()
    .required('* Required')
    .test('isValidDate', (value) => {
      return dayjs(value).isValid();
    }),
  depart: Yup.mixed()
    .required('* Required')
    .test('isValidDate', (value) => {
      return dayjs(value).isValid();
    }),
});