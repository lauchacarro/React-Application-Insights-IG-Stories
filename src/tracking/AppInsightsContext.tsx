import React, { createContext, ReactNode, useContext } from "react";
import { reactPlugin } from "./AppInsights";

const AppInsightsContext = createContext(reactPlugin);

interface AppInsightsContextProviderProps {
  children: ReactNode;
}

const AppInsightsContextProvider: React.FC<AppInsightsContextProviderProps> = ({
  children,
}) => {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      {children}
    </AppInsightsContext.Provider>
  );
};

const useAppInsightsContext = () => useContext(AppInsightsContext);


export { AppInsightsContextProvider, useAppInsightsContext };
