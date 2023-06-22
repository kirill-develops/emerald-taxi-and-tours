import FormFlightDetails from '../../../../FormComponents/Layout/FlightFormLayout';
import FormTourDetails from '../../../../FormComponents/Layout/TourFormLayout';
import FormPersonalDetails from '../../../../FormComponents/Layout/PersonalFormLayout';
import FormPaymentDetails from '../../../../FormComponents/Layout/PaymentFormLayout';
import FormConfirmDetails from '../../../../FormComponents/Layout/ConfirmFormLayout';

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
