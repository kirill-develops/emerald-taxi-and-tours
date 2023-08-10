import React, { useEffect, useState } from 'react';

export default function useDarkModeToggle(isDark) {
  const [isDarkMode, setIsDarkMode] = useState(isDark);

  function toggleColorMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => setIsDarkMode(isDark), [isDark]);

  return { isDarkMode, toggleColorMode };
}
