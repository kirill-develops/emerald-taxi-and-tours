import TextField from '@mui/material/TextField';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Link from '@material/Link';
import GroupHeader from './Elements/GroupHeader';
import GroupItems from './Elements/GroupItems';

export const listBoxProps = {
  style: {
    padding: 0,
  },
};

export const renderInputProp = (params) => (
  <TextField
    {...params}
    autoFocus
    placeholder="Search"
    type='search'
    sx={{
      backgroundColor: theme => theme.palette.tertiary.container,
      '& .MuiOutlinedInput-root': {
        paddingRight: theme => `${theme.spacing(1)} !important`,
        color: theme => theme.palette.tertiary.containerText,
      }
    }}
    InputProps={{
      ...params.InputProps,
      sx: {
        paddingRight: 'unset'
      }
    }}
  />
);

export const renderGroupProp = (params) => (
  <li key={params.key}>
    <GroupHeader>{params.group}</GroupHeader>
    <GroupItems>{params.children}</GroupItems>
  </li>
);

export const renderOptionProp = (props, option, { inputValue }) => {
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
}