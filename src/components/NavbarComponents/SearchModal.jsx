import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React from 'react';

const modalStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '50%',
  minWidth: 150,
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid common.black',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

function SearchModal({ open, handleClose }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={Backdrop}
      slotProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box
          top={{ xs: '75%', sm: '25%' }}
          sx={modalStyle}
        >
          {/* <Autocomplete /> */}
        </Box>
      </Fade>
    </Modal>
  );
}

export default SearchModal;
