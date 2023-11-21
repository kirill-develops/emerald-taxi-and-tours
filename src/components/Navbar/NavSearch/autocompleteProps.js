import TextField from '@mui/material/TextField';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Link from '@material/Link';
import GroupHeader from './Elements/GroupHeader';
import GroupItems from './Elements/GroupItems';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

export const listBoxProps = {
  style: {
    padding: 0,
  },
};

export const AutocompleteTextField = (params) => (
  <TextField
    {...params}
    autoFocus
    placeholder="Search"
    type='search'
    sx={theme => ({
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.tertiary.main,
      [`& .${outlinedInputClasses.root}`]: {
        paddingRight: `${theme.spacing(1)} !important`,
        color: theme.palette.tertiary.containerText,
        '&.Mui-focused': {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.primary.main,
          borderColor: theme.palette.tertiary.main,
          boxShadow: 2,
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.tertiary.main,
          }
        }
      },
    })}
  />
);

export const renderGroupProp = (params) => (
  <li key={params.key}>
    <GroupHeader>{params.group}</GroupHeader>
    <GroupItems>{params.children}</GroupItems>
  </li>
);

const StyledLink = styled(Link)(({ theme }) => theme.unstable_sx({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}))

export const useRenderOptionProp = (props, option, { inputValue }) => {

  const matches = match(option.name, inputValue, {
    insideWords: true,
  });
  const parts = parse(option.name, matches);

  const hightlightStyle = highlight => ({
    fontWeight: highlight ? 700 : 300,
  })

  return (<>
    <li {...props}>
      <StyledLink href={option.link} >
        {parts.map(({ text, highlight }, index) => (
          <span
            key={index}
            style={hightlightStyle(highlight)}
          >
            {text}
          </span>
        ))}
      </StyledLink>
    </li>
  </>
  );
}