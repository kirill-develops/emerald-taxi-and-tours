import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React, { useCallback, useContext, useMemo } from 'react';
import { ParamContext } from '@Form/FormContextProvider';
import { tourSteps, transferSteps } from '@data/transferSteps';

export function useDataByKey(keys, data) {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  return useMemo(
    () =>
      data.map((data) =>
        keys.reduce((accumulator, key) => {
          return {
            ...accumulator,
            [key]: data[key]?.toString ? data[key].toString() : data[key],
          };
        }, []),
      ),
    [data, keys],
  );
}

function StepperProgressBar({ activeStep }) {
  const context = useContext(ParamContext);

  const stepsData = useMemo(
    () => (context.type === 'transfer' ? transferSteps : tourSteps),
    [context.type],
  );

  const labels = useDataByKey('label', stepsData);

  const getLabel = useCallback(
    (index, text) => {
      if (activeStep >= index) {
        return text;
      }
    },
    [activeStep],
  );

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
    >
      {labels.map(({ label }, index) => (
        <Step key={label}>
          <StepLabel>{getLabel(index, label)}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default React.memo(StepperProgressBar);
