import React, { useRef } from 'react';
import { useState } from 'react';
// Data
import { tempPlayerData } from '../utils/TempData';
import { Building } from '../components/game/canvas/Building';
// Context
export const PlayerContext = React.createContext();

const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(tempPlayerData);
  const [cantAffordBuilding, setCantAffordBuilding] = useState(false);

  const mouseItemRef = useRef(null);
  const mouseBuildingRef = useRef(null);

  const buyBuilding = (building) => {
    if (
      building.currencyType === 'gold' &&
      building.cost > player.currencyData.gold
    ) {
      console.log('CANNOT AFFORD ITEM');
      setCantAffordBuilding(true);
    } else if (
      building.currencyType === 'gems' &&
      building.cost > player.currencyData.gems
    ) {
      console.log('CANNOT AFFORD ITEM');
      setCantAffordBuilding(true);
    } else {
      mouseItemRef.current = building;

      const mouseBuilding = new Image();
      mouseBuilding.src = building.imageUrl;

      mouseBuilding.onload = () => {
        const selectedBuilding = new Building(
          1,
          building.name,
          mouseBuilding,
          100,
          100,
          building.cost,
          building.currencyType,
          building.incomeSeconds,
          building.incomeAmount
        );

        mouseBuildingRef.current = selectedBuilding;
      };
    }
  };

  const closeCantAffordBuildingModal = () => {
    setCantAffordBuilding(false);
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
        cantAffordBuilding,
        closeCantAffordBuildingModal,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
