import React, { createContext, useContext, useState } from 'react';

const ComponentContext = createContext();

/**
 * Creates a component provider that wraps its children with a ComponentContext.Provider.
 * The provider maintains the currentComponent state and provides functions to update it.
 *
 * @param {Object} props - The props object containing the children to be wrapped.
 * @param {ReactNode} props.children - The children components to be wrapped.
 * @return {JSX.Element} The ComponentContext.Provider component wrapping the children.
 */
export const ComponentProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState('MultiStepper');

  return (
    <ComponentContext.Provider value={{ currentComponent, setCurrentComponent }}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponentContext = () => useContext(ComponentContext);