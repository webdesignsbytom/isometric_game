import React, { useContext, useRef } from 'react';
import { useEffect, useState } from 'react';
// Data
import { tempPlayerData } from '../utils/TempData';
import { Building } from '../components/game/canvas/Building';
// Context
export const PlayerContext = React.createContext();

const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(tempPlayerData);
  const [buildingToPlace, setBuildingToPlace] = useState(false);
  const mouseItemRef = useRef(null);
  const testRef = useRef(null);
  
  console.log('player', player);

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

    const imageX = new Image();
    imageX.src = building.imageUrl;

    const building2 = new Building(
      1,
      building.name,
      imageX,
      100,
      100,
      100,
      100
    );
    console.log('Building', building2);
    testRef.current = building2;
  };

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        buyBuilding,
        mouseItemRef,
        buildingToPlace,
        testRef,
        // Buildings
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
