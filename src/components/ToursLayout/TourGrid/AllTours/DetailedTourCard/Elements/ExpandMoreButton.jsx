import ExpandMore from '@elements/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import { useMediaQuery } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import React from 'react';

export default React.memo(function ExpandMoreButton({
  expanded,
  handleExpand,
}) {
  const isMdBreakpoint = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <ExpandMore
      expand={expanded}
      onClick={handleExpand}
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
});
