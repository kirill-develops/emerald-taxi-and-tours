import ExpandMore from '@elements/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import { useMediaQuery } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import React from 'react';

export default function ExpandMoreButton({ expanded, handleExpandClick }) {
  const isMdBreakpoint = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <Tooltip
        title={expanded ? '' : 'click for more'}
        arrow
        TransitionComponent={Zoom}
      >
        <ExpandMoreIcon
          color="primary"
          fontSize={isMdBreakpoint ? 'large' : 'medium'}
        />
      </Tooltip>
    </ExpandMore>
  );
}
