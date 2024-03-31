import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Link from '@material/Link';
import NoWrapCardHeader from './NoWrapCardHeader';

export const heightStyles = { height: '100%' };

export const StyledCard = styled(Card)(({ theme }) =>
  theme.unstable_sx({
    ...heightStyles,
    borderRadius: 4,
    backgroundColor: theme.palette.primary.container,
    color: theme.palette.primary.containerText,
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create('box-shadow', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      boxShadow: theme.shadows[3],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
    },
  }),
);

export const CardHighlight = styled((props) => (
  <CardActionArea
    component="div"
    {...props}
  />
))(({ theme }) => theme.unstable_sx(heightStyles));

export const StyledCardContent = styled(CardContent)(({ theme }) =>
  theme.unstable_sx({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    rowGap: 0.5,
  }),
);

export const StyledBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({ py: 1.25, px: 2 }),
);

export const StyledLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({
    ...heightStyles,
    justifyContent: 'flex-start',
    textDecoration: 'none',
  }),
);

export const StyledNoWrapCardHeader = styled((props) => (
  <NoWrapCardHeader
    titleVariant="cardTitle"
    titleColor={(theme) => theme.palette.secondary.containerText}
    subheaderVariant="cardCaption"
    subheaderColor={(theme) => theme.palette.secondary.containerText}
    {...props}
  />
))(({ theme }) => theme.unstable_sx({}));
