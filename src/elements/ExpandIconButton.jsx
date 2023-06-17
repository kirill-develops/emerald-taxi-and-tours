import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ExpandIcon(props) {
  return (
    <IconButton {...props}>
      <ExpandMoreIcon />
    </IconButton>
  );
}

export default ExpandIcon;
