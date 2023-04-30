import Autocomplete from '@mui/material/Autocomplete';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Fuse from 'fuse.js';
import React from 'react';
import Link from '@material/Link';
import { transferData } from '@data/transfers';
import { tourData } from '@data/tours';
import { darken, lighten, styled } from '@mui/system';
import { useRouter } from 'next/router';

const modalStyle = {
  width: '100%',
  minWidth: 150,
  maxWidth: 400,
  boxShadow: 12,
};

const searchStyle = {
  ...modalStyle,
  width: '50%',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  bgcolor: 'background.paper',
  border: '2px solid common.black',
  borderRadius: '4px',
};

const GroupHeader = styled('div')(({ theme }) => ({
  lineHeight: '48px',
  listStyle: 'none',
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: '0.875rem',
  padding: '4px 16px',
  position: 'sticky',
  top: '0',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.secondary.light, 0.85)
      : darken(theme.palette.secondary.main, 0.8),
}));

const GroupItems = styled('ul')(({ theme }) => ({
  padding: 0,
  fontSize: '0.925rem',
}));

const transferOptions = transferData.flatMap(
  ({ name: areaName, destinations, link, airport, airportLink }) =>
    destinations.map((destination) => {
      const name =
        destination.name === 'All Other Resorts, Villas, AirBnB & Homes'
          ? `all other options in ${areaName} <> ${airport}`
          : `${destination.name} <> ${airport}`;

      return {
        name: name,
        area: areaName,
        airport: airport,
        airportLink: airportLink,
        link: `/transfer/${airportLink}/${link}/${destination.link}`,
        type: 'Transfers',
      };
    }),
);

const tourOptions = tourData.map(({ name, link, area, type, price }) => {
  const [priceName, priceParish] = price.map(({ name, parish }) => [
    name,
    parish,
  ]);

  return {
    name: `${name} in ${area}`,
    tourType: type,
    from: priceName,
    parish: priceParish,
    link: `/tours/${link}`,
    type: 'Tours',
  };
});

const fuseOptions = {
  keys: [
    'name',
    'area',
    'airport',
    'airportLink',
    'tourType',
    'from',
    'parish',
    'type',
  ],
  threshold: 0.2,
  findAllMatches: true,
  includeScore: true,
  ignoreCase: true,
  ignoreLocation: true,
  useExtendedSearch: true,
};

const options = [...transferOptions, ...tourOptions].sort((a, b) =>
  a.name.localeCompare(b.name),
);

function SearchModal({ open, handleClose }) {
  const router = useRouter();
  const fuse = new Fuse(options, fuseOptions);

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
          sx={searchStyle}
        >
          <Autocomplete
            autoHighlight
            clearOnBlur={false}
            popupIcon={null}
            open={true}
            noOptionsText="Unable to find any tours or transfers"
            disablePortal
            onChange={handleOptionSelect}
            options={options.sort((a, b) => a.type.localeCompare(b.type))}
            groupBy={(option) => option.type}
            getOptionLabel={(option) => option.name}
            ListboxProps={{
              style: {
                padding: 0,
              },
            }}
            componentsProps={{ popper: { style: modalStyle } }}
            renderInput={(params) => (
              <TextField
                {...params}
                autoFocus
                placeholder="Search"
              />
            )}
            filterOptions={(options, state) => {
              if (state.inputValue === '') {
                return options;
              }

              const results = fuse.search(state.inputValue);

              return results
                .sort((a, b) => {
                  const typeComparison = a.item.type.localeCompare(b.item.type);

                  if (typeComparison !== 0) {
                    // If the types are not equal, return the comparison result
                    return typeComparison;
                  } else {
                    // If the types are equal, compare the scores
                    return a.score - b.score;
                  }
                })
                .map((result) => options[result.refIndex]);
            }}
            renderGroup={(params) => (
              <li key={params.key}>
                <GroupHeader>{params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
              </li>
            )}
            renderOption={(props, option, { inputValue }) => {
              const matches = match(option.name, inputValue, {
                insideWords: true,
              });
              const parts = parse(option.name, matches);

              return (
                <li {...props}>
                  <Link
                    href={option.link}
                    sx={(theme) => ({
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                    })}
                  >
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                      >
                        {part.text}
                      </span>
                    ))}
                  </Link>
                </li>
              );
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
}

export default SearchModal;
