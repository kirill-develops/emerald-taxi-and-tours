import { useMemo } from 'react';
import useStepData from '@hooks/useStepData';
import { useRouter } from 'next/router';

export default function useUrlHashBookingStep(setCookie, bookingStep) {
  const router = useRouter();
  const stepsData = useStepData();

  const matchedBookingStep = useMemo(() => {
    if (!router?.asPath) {
      return;
    }

    const url = new URL(`http://localhost:3000${router.asPath}`);
    const hashValue = url.hash.slice(1); // Remove the '#' from the hash

    const matchedStepIndex = stepsData.findIndex(
      (step) => step.link === hashValue,
    );

    if (matchedStepIndex !== -1 && matchedStepIndex !== bookingStep) {
      setCookie({ bookingStep: matchedStepIndex });
      return matchedStepIndex;
    }
    return null;
  }, [router.asPath, stepsData, bookingStep, setCookie]);

  return matchedBookingStep;
}
