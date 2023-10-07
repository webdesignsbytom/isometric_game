import React from 'react';
import { useEffect, useState } from 'react';
// Data
import { tempPlayerData } from '../utils/TempData';
// Context
export const PlayerContext = React.createContext();

const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(tempPlayerData);

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
