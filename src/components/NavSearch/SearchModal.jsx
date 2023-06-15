import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
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
import useSearchListner from '@hooks/useSearchListner';

const StyledAutocompletePopper = styled('div')(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: 'none',
    margin: 0,
    color: 'inherit',
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.background.default,
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: 'relative',
  },
}));

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
          top={{ xs: '60%', sm: '40%' }}
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
            ListboxProps={listBoxProps}
            PopperComponent={StyledAutocompletePopper}
            componentsProps={{ popper: { style: modalStyles } }}
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
