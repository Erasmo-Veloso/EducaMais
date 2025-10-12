import React, { createContext, useState } from "react";

export const TourContext = createContext({
  tourActive: false,
  setTourActive: (active: boolean) => {},
});

export const TourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tourActive, setTourActive] = useState(false);
  return (
    <TourContext.Provider value={{ tourActive, setTourActive }}>
      {children}
    </TourContext.Provider>
  );
};