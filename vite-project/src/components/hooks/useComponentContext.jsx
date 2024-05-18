import React, { createContext, useContext, useState } from 'react';

const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState('MultiStepper');

  return (
    <ComponentContext.Provider value={{ currentComponent, setCurrentComponent }}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponentContext = () => useContext(ComponentContext);