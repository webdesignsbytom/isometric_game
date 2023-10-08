import React, { useContext, useRef } from 'react';
import { useEffect, useState } from 'react';
// Data
import { tempPlayerData } from '../utils/TempData';
import { Building } from '../components/game/canvas/Building';
// Context
export const PlayerContext = React.createContext();

const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(tempPlayerData);

  const mouseItemRef = useRef(null);
  const mouseBuildingRef = useRef(null);

  const buyBuilding = (building) => {
    mouseItemRef.current = building;

    const mouseBuilding = new Image();
    mouseBuilding.src = building.imageUrl;

    mouseBuilding.onload = () => {
      const selectedBuilding = new Building(
        1,
        building.name,
        mouseBuilding,
        100,
        100
      );

      console.log('Building RRRRRRRRR', selectedBuilding);
      mouseBuildingRef.current = selectedBuilding;
    };
  };

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        buyBuilding,
        mouseItemRef,
        mouseBuildingRef,
        // Buildings
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
