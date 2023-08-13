const modalStyles = {
  width: '100%',
  minWidth: 150,
  maxWidth: 400,
  boxShadow: 5,
};

export const searchStyles = {
  ...modalStyles,
  width: '50%',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  bgcolor: 'background.paper',
  border: '2px solid common.black',
  borderRadius: '4px',
  border: theme => `3px solid ${theme.palette.background.paper}`
};
