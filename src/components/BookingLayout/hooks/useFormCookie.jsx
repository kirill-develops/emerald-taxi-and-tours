import isEqual from 'lodash/isEqual';
import { useCallback, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { capitalize } from '@helperFunctions';
import { ParamContext } from '@Form/FormContextProvider';
import useFormInitValues from './useFormInitValues';
import { getUpdatedValues } from './useFormCookieFunctions/getUpdatedValues';
import { getParsedCookieValues } from './useFormCookieFunctions/getParsedCookieValues';
import getFilteredCookieValues from './useFormCookieFunctions/getFilteredCookieValues';

const cookieOptions = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 1 week
};

function useFormCookie() {
  const { type: bookingType } = useContext(ParamContext);

  const initialValues = useFormInitValues();

  const cookieName = useMemo(
    () => `Emerald${capitalize(bookingType)}FormCache`,
    [bookingType],
  );

  const [formCookie, setFormCookie] = useCookies([cookieName]);

  const cookieData = useMemo(
    () => formCookie[cookieName],
    [formCookie, cookieName],
  );

  const parsedCookieValues = getParsedCookieValues(
    initialValues,
    cookieData,
    bookingType,
  );

  const updateFormCookie = useCallback(
    (values) => {
      const filteredCookieValues = getFilteredCookieValues(
        values,
        parsedCookieValues,
      );

      if (!isEqual(filteredCookieValues, values)) {
        const updatedValues = getUpdatedValues(values, cookieData, bookingType);

        const stringifiedValues = JSON.stringify(updatedValues);

        setFormCookie(cookieName, stringifiedValues, cookieOptions);
      }
    },
    [cookieName, parsedCookieValues, setFormCookie, cookieData, bookingType],
  );

  const parsedCookie = useMemo(() => {
    if (!cookieData) {
      setFormCookie(cookieName, JSON.stringify(initialValues), cookieOptions);

      return initialValues;
    }

    return parsedCookieValues;
  }, [
    cookieName,
    cookieData,
    initialValues,
    parsedCookieValues,
    setFormCookie,
  ]);

  return useMemo(
    () => [parsedCookie, updateFormCookie],
    [parsedCookie, updateFormCookie],
  );
}

export default useFormCookie;
