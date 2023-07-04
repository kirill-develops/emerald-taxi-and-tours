import React, { createContext } from 'react';

export const ParamContext = createContext();

function FormContextProvider({ value, children }) {
  return (
    <ParamContext.Provider value={value}>{children}</ParamContext.Provider>
  );
}

export default FormContextProvider;
