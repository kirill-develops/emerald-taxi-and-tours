import useMediaQuery from '@mui/material/useMediaQuery';

export default function useFieldSizeGetter() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const fieldSize = isMd ? 'medium' : 'small';

  return fieldSize;
}
