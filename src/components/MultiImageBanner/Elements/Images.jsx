import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import GridImage from './GridImage';
import useImageBreakpoints from '../hooks/useImageBreakpoints';

export default React.memo(function Images() {
  const { tripAdvisorPhotos: photos } = useContext(ParamContext);

  const { breakpointImageLength, muiImageSizes } = useImageBreakpoints();

  if (!photos) return null;

  const length = breakpointImageLength || photos.length - 1;

  return photos.slice(0, length).map((picData) => (
    <GridImage
      picData={picData}
      muiImageSizes={muiImageSizes}
      key={picData.id}
    />
  ));
});
