import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import React, { useCallback, useState } from 'react';
import ExpandMore from '@elements/ExpandMore';
import { styled } from '@mui/material/styles';

const ExpandButton = styled(ExpandMore)(({ theme, expand }) =>
  theme.unstable_sx({
    position: 'absolute',
    zIndex: 5,
    top: { xxs: 10, md: 25 },
    right: { xxs: 24, md: 36 },
    display: !expand && 'none',
  }),
);

const linkStyles = {
  display: 'inline-block',
  cursor: 'pointer',
};

function StyledLink({ children, ...rest }) {
  return (
    <Link
      color="tertiary.main"
      fontWeight={500}
      sx={linkStyles}
      {...rest}
    >
      {children}
    </Link>
  );
}

const iconStyles = { color: (theme) => theme.palette.tertiary.main };

export default function TextCollapse({ children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = useCallback(() => {
    setExpanded((prevValue) => !prevValue);
  }, []);

  if (!children) {
    return null;
  }

  const words = children.split(' ');

  if (words.length <= 29) {
    return <Typography variant="body1">{children}</Typography>;
  }

  const first30Words = words.slice(0, 29).join(' ');

  return (
    <>
      <ExpandButton
        expand={expanded}
        onClick={handleClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon sx={iconStyles} />
      </ExpandButton>
      <Typography variant="body1">
        {expanded ? children : first30Words}
        <StyledLink onClick={handleClick}>
          {expanded ? '...Less' : '...Read More'}
        </StyledLink>
      </Typography>
    </>
  );
}
