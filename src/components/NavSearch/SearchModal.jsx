import Autocomplete from '@mui/material/Autocomplete';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import React from 'react';
import { useRouter } from 'next/router';
import { modalStyles, searchStyles } from './searchModalStyles';
import {
  listBoxProps,
  renderGroupProp,
  renderInputProp,
  renderOptionProp,
} from './autocompleteProps';
import useSearchFilterOptions from '@hooks/useSearchFilterOptions';

function SearchModal({ open, handleClose }) {
  const router = useRouter();
  const { searchOptions, filterOptionsProp } = useSearchFilterOptions();

  const handleOptionSelect = (event, value) => {
    if (value) {
      handleClose();
      router.push(value.link);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 500 },
      }}
    >
      <Fade
        in={open}
        timeout={500}
      >
        <Box
          top={{ xs: '75%', sm: '25%' }}
          sx={searchStyles}
        >
          <Autocomplete
            autoHighlight
            clearOnBlur={false}
            popupIcon={null}
            open={true}
            noOptionsText="Unable to find any tours or transfers"
            disablePortal
            onChange={handleOptionSelect}
            options={searchOptions}
            groupBy={(option) => option.type}
            getOptionLabel={(option) => option.name}
            ListboxProps={listBoxProps}
            componentsProps={{ popper: { style: modalStyles } }}
            renderInput={renderInputProp}
            filterOptions={filterOptionsProp}
            renderGroup={renderGroupProp}
            renderOption={renderOptionProp}
          />
        </Box>
      </Fade>
    </Modal>
  );
}

export default SearchModal;
