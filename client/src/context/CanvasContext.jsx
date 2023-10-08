import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
// Data
import { tempPlayerData } from '../utils/TempData';
// Context
export const CanvasContext = React.createContext();

const CanvasContextProvider = ({ children }) => {
  const mouseItemRef = useRef(null);

  return (
    <CanvasContext.Provider
      value={{
        mouseItemRef,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasContextProvider;
