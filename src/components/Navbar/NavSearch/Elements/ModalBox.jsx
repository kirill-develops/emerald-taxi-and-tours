import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const modalStyles = {
  minWidth: 150,
  maxWidth: 400,
};

const ModalBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    ...modalStyles,
    position: 'absolute',
    top: { xxs: '60%', sm: '40%' },
    left: '50%',
    width: '50%',
    transform: 'translate(-50%,-50%)',
    bgcolor: 'background.paper',
    borderRadius: '4px',
    border: `3px solid ${theme.palette.background.paper}`,
    boxShadow: 10,
  }),
);

export default ModalBox;
