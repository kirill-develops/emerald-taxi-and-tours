import { useMediaQuery } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import GridImage from './GridImage';

export default React.memo(function Images({}) {
  const { tripAdvisorPhotos: photos } = useContext(ParamContext);

  const isXxsBreakpoint = useMediaQuery((theme) =>
    theme.breakpoints.only('xxs'),
  );
  const isXsBreakpoint =
    useMediaQuery((theme) => theme.breakpoints.only('xs')) && 3;
  const isSmBreakpoint =
    useMediaQuery((theme) => theme.breakpoints.only('sm')) && 4;

  const breakpointImageLength = useMemo(() => {
    if (isXxsBreakpoint) return 1;
    if (isXsBreakpoint) return 3;
    if (isSmBreakpoint) return 4;
    return 5;
  }, [isXxsBreakpoint, isXsBreakpoint, isSmBreakpoint]);

  return useMemo(
    () =>
      photos
        .slice(0, breakpointImageLength || photos.length - 1)
        .map((picData) => (
          <GridImage
            picData={picData}
            key={picData.id}
          />
        )),
    [, photos, breakpointImageLength],
  );
});
