import isEqual from 'lodash/isEqual';
import { useCallback, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { capitalize } from '@helperFunctions';
import { ParamContext } from '@context/FormContextProvider';
import useFormInitValues from './useFormInitValues';
import { getUpdatedValues } from './useFormCookieFunctions/getUpdatedValues';
import useCookieParser from './useFormCookieFunctions/useCookieParser';
import getFilteredCookieValues from './useFormCookieFunctions/getFilteredCookieValues';

const cookieOptions = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 1 week
};

const getCookieName = (bookingType) =>
  `Emerald${capitalize(bookingType)}FormCache`;

export default function useFormCookie() {
  const { type: bookingType } = useContext(ParamContext);
  const cookieName = getCookieName(bookingType);
  const initialValues = useFormInitValues();
  const [formCookie, setFormCookie] = useCookies([cookieName]);

  const cookieData = formCookie[cookieName];
  const parsedCookieValues = useCookieParser(cookieData, bookingType);

  const updateFormCookie = useCallback(
    (values) => {
      const filteredCookieValues = getFilteredCookieValues(
        values,
        parsedCookieValues,
      );

      if (!isEqual(filteredCookieValues, values)) {
        const updatedValues = getUpdatedValues(values, cookieData, bookingType);

        setFormCookie(cookieName, JSON.stringify(updatedValues), cookieOptions);
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
