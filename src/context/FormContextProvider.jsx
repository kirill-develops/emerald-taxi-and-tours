import React, { createContext } from 'react';

export const ParamContext = createContext();

export default React.memo(function FormContextProvider({ value, children }) {
  return (
    <ParamContext.Provider value={value}>{children}</ParamContext.Provider>
  );
});
