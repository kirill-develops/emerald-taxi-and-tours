import { AsYouType, getExampleNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';
import { useFormikContext } from 'formik';
import { useCallback, useMemo } from 'react';

function usePhoneField(stepName, fieldName, mobile = false) {
  const { values, setFieldValue } = useFormikContext();

  const [fieldValue, placeholderText] = useMemo(() => {
    const currentCountry = values?.personalDetails?.country;
    const exampleNumber = getExampleNumber(
      currentCountry,
      examples,
    ).formatInternational();

    const formikValue = values?.[stepName]?.[fieldName];

    const formatter = new AsYouType(currentCountry);
    const formattedNumber = formatter.input(formikValue);
    const phoneObj = formatter.getNumber();
    console.log(phoneObj);

    return mobile ? [formattedNumber, exampleNumber] : [formikValue, ''];
  }, [mobile, values, stepName, fieldName]);
  console.log(values.personalDetails.mobile);

  const handlePhoneChange = useCallback(
    (event) => {
      const inputValue = event.target.value;
      const inputEl = event.target;

      // use requestAnimationFrame to defer execution until after input updates
      requestAnimationFrame(() => {
        const lastChar = inputEl.value[inputEl.selectionEnd - 1];
        const secondLastChar = inputEl.value[inputEl.selectionEnd - 2];

        if ((lastChar === ' ' && secondLastChar === ')') || lastChar === ')') {
          inputEl.setSelectionRange(
            inputEl.selectionEnd - 1,
            inputEl.selectionEnd - 1,
          );
        }
      });

      const formatter = new AsYouType();
      formatter.input(inputValue);
      const phoneObj = formatter.getNumber();
      const phoneCountryCode = formatter.getCountry();
      const possibleCountries = phoneObj?.getPossibleCountries();

      if (phoneCountryCode) {
        setFieldValue('personalDetails.country', phoneCountryCode);
      } else if (possibleCountries?.length > 0) {
        setFieldValue('personalDetails.country', possibleCountries[0]);
      }

      setFieldValue('personalDetails.mobile', inputValue);
    },
    [setFieldValue],
  );
  return { fieldValue, placeholderText, handlePhoneChange };
}

export default usePhoneField;
