export default function getFilteredCookieValues(
  currentValues,
  parsedCookieValues,
) {
  const valueSubclass = Object.keys(currentValues || {}).reduce(
    (acc, key) => key,
  );

  const filteredCookie = Object.entries(
    currentValues[valueSubclass] || {},
  ).reduce(
    (acc, [key, _value]) => {
      if (parsedCookieValues[valueSubclass]?.hasOwnProperty(key)) {
        acc[valueSubclass][key] = parsedCookieValues[valueSubclass][key];
      }
      return acc;
    },
    { [valueSubclass]: {} },
  );

  return filteredCookie;
}
