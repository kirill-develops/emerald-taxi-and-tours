import { Search } from '@mui/icons-material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';

const modalStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '50%',
  minWidth: 150,
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid common.black',
  boxShadow: 24,
  p: 4,
};

function MobileSearchModal({ dissapearingBreakpoint }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        display: { xxs: 'flex', [dissapearingBreakpoint]: 'none' },
      }}
    >
      <IconButton
        size="large"
        aria-label="search tours & taxi fares"
        aria-controls="menu-searchbar"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Search />
      </IconButton>
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
            top={{ xss: '75%', sm: '25%' }}
            sx={modalStyle}
          >
            {/* <Autocomplete /> */}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default MobileSearchModal;
