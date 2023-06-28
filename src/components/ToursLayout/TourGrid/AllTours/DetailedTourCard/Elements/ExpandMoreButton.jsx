import ExpandMore from '@elements/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import React from 'react';

export default function ExpandMoreButton({ expanded, handleExpandClick }) {
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
          fontSize="large"
        />
      </Tooltip>
    </ExpandMore>
  );
}
