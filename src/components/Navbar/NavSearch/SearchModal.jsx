import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import React from 'react';
import { useRouter } from 'next/router';
import {
  AutocompleteTextField,
  renderGroupProp,
  useRenderOptionProp,
} from './autocompleteProps';
import useSearchListner from './hooks/useSearchListner';
import useSearchFilterOptions from './hooks/useSearchFilterOptions';
import ModalBox from './Elements/ModalBox';

const StyledAutocompletePopper = styled('div')(({ theme }) =>
  theme.unstable_sx({
    width: '100%',
    minWidth: 150,
    maxWidth: 400,
    [`& .${autocompleteClasses.paper}`]: {
      boxShadow: 0,
      color: 'inherit',
      mt: 0.5,
    },
    [`& .${autocompleteClasses.listbox}`]: {
      color: (theme) => theme.palette.background.variantText,
      backgroundColor: (theme) => theme.palette.background.variant,
      p: 0,
    },
    [`&.${autocompleteClasses.popperDisablePortal}`]: {
      position: 'relative',
    },
    [`& .${autocompleteClasses.option}`]: {
      m: 1,
      '&.Mui-focused': {
        border: `2px solid ${theme.palette.tertiary.main}`,
        borderRadius: 2.5,
      },
    },
  }),
);

export default React.memo(function SearchModal({
  open,
  handleOpen,
  handleClose,
}) {
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
        <ModalBox>
          <Autocomplete
            autoHighlight
            clearOnBlur={false}
            popupIcon={null}
            open
            disablePortal
            noOptionsText="Sorry, no matches found"
            onChange={handleOptionSelect}
            groupBy={(option) => option.type}
            getOptionLabel={(option) => option.name}
            PopperComponent={StyledAutocompletePopper}
            renderInput={AutocompleteTextField}
            filterOptions={filterOptionsProp}
            options={searchOptions}
            renderGroup={renderGroupProp}
            renderOption={useRenderOptionProp}
            onKeyUp={(event) => {
              if (event.key === 'Escape') {
                handleClose();
              }
            }}
          />
        </ModalBox>
      </Fade>
    </Modal>
  );
});
