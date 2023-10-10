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
  const buildingIDNumberRef = useRef(1);

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

      const mouseBuildingImage = new Image();
      mouseBuildingImage.src = building.imageUrl;

      mouseBuildingImage.onload = () => {
        const selectedBuilding = new Building(
          buildingIDNumberRef.current, // ID
          building.name, // building name lowercase
          building.title, // building name For Show
          mouseBuildingImage, // Image
          building.description, //description
          building.gridSize, // gridSize
          building.cost, // Cost
          building.currencyType, // Gems/Gold
          building.incomeSeconds, // Time to produce
          building.incomeAmount, // Amount to produce
          building.incomeCurrency, // Gems/Gold to produce
          building.incomePeriod, // Text version of time
          building.constructionTime, // seconds to build
          building.constructionTimePeriod, // Text seconds to build
          building.constructionImage, // Construction image
          100, // X pos
          100, // Y pos
          building.imageHeight, // Image height
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
        buildingIDNumberRef,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
