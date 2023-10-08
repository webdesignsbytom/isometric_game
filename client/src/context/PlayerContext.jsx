import React, { useContext, useRef } from 'react';
import { useEffect, useState } from 'react';
// Data
import { tempPlayerData } from '../utils/TempData';
// Context
export const PlayerContext = React.createContext();

const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(tempPlayerData);
  const [buildingToPlace, setBuildingToPlace] = useState(false);
  const mouseItemRef = useRef(null);

  const buyBuilding = (building) => {
    let mouse;

    let playerBuildings = player.buildingsData.buildingsArray;
    let playerBuildingNum = player.buildingsData.buildingsOwned;

    playerBuildings.push(building);
    playerBuildingNum++;

    setPlayer({
      ...player,
      buildingsData: {
        buildingsOwned: playerBuildingNum,
        buildingsArray: playerBuildings,
      },
    });

    mouseItemRef.current = building;
    setBuildingToPlace(true);
  };

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        buyBuilding,
        mouseItemRef,
        buildingToPlace,
        // Buildings
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
