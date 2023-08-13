import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import React from 'react';
import { useRouter } from 'next/router';
import { searchStyles } from './searchModalStyles';
import {
  renderGroupProp,
  renderInputProp,
  renderOptionProp,
} from './autocompleteProps';
import useSearchListner from './hooks/useSearchListner';
import useSearchFilterOptions from './hooks/useSearchFilterOptions';

const StyledAutocompletePopper = styled('div')(({ theme }) =>
  theme.unstable_sx({
    width: '100%',
    minWidth: 150,
    maxWidth: 400,
    boxShadow: 5,
    [`& .${autocompleteClasses.paper}`]: {
      boxShadow: 0,
      margin: 0,
    },
    [`& .${autocompleteClasses.listbox}`]: {
      color: (theme) => theme.palette.background.variantText,
      backgroundColor: (theme) => theme.palette.background.variant,
      p: 0,
    },
    [`&.${autocompleteClasses.popperDisablePortal}`]: {
      position: 'relative',
    },
  }),
);

function SearchModal({ open, handleOpen, handleClose }) {
  const router = useRouter();
  const { searchOptions, filterOptionsProp } = useSearchFilterOptions();

  useSearchListner(handleOpen);

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
          top={{ xxs: '60%', sm: '40%' }}
          sx={searchStyles}
        >
          <Autocomplete
            autoHighlight
            clearOnBlur={false}
            popupIcon={null}
            open={true}
            noOptionsText="No tours or transfers"
            disablePortal
            onChange={handleOptionSelect}
            options={searchOptions}
            groupBy={(option) => option.type}
            getOptionLabel={(option) => option.name}
            PopperComponent={StyledAutocompletePopper}
            renderInput={renderInputProp}
            filterOptions={filterOptionsProp}
            renderGroup={renderGroupProp}
            renderOption={renderOptionProp}
            onKeyUp={(event) => {
              if (event.key === 'Escape') {
                handleClose();
              }
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
}

export default SearchModal;
