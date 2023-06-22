import FormFlightDetails from '@Form/Layout/FlightFormLayout';
import FormTourDetails from '@Form/Layout/TourFormLayout';
import FormPersonalDetails from '@Form/Layout/PersonalFormLayout';
import FormPaymentDetails from '@Form/Layout/PaymentFormLayout';
import FormConfirmDetails from '@Form/Layout/ConfirmFormLayout';

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

export const tourSteps = [
  {
    label: 'Tour Details',
    link: 'tourDetails',
    component: <FormTourDetails />,
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
