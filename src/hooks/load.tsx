import React, { createContext, useCallback, useContext, useState } from 'react';

interface LoadScreenContextData {
  addLoadScreen(nResources?: number): void;
  removeLoadScreen(element?: string): void;
  isLoading: boolean;
}

const LoadScreenContext = createContext<LoadScreenContextData>(
  {} as LoadScreenContextData,
);

const LoadScreenProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const addLoadScreen = useCallback((nResources = 1) => {
    setCounter(state => state + nResources);
  }, []);

  const removeLoadScreen = useCallback(() => {
    setCounter(state => state - 1);
  }, []);

  React.useEffect(() => {
    if (counter >= 1) setIsLoading(true);
    else setIsLoading(false);
  }, [counter]);

  return (
    <LoadScreenContext.Provider
      value={{ addLoadScreen, removeLoadScreen, isLoading }}
    >
      {children}
    </LoadScreenContext.Provider>
  );
};

function useLoadScreen(): LoadScreenContextData {
  const context = useContext(LoadScreenContext);

  if (!context) {
    throw new Error('useLoadScreen must be used within a LoadScreenProvider');
  }

  return context;
}

export { LoadScreenProvider, useLoadScreen };
