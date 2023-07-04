import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const BookingAccordionDetails = styled(AccordionDetails)(({ theme }) =>
  theme.unstable_sx({ mt: { xxs: 1.5, md: 3.5 } }),
);

export default BookingAccordionDetails;
