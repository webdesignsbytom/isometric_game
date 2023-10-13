import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
// Data
import { tempPlayerData } from '../utils/gameData/PlayerData';
import { Building } from '../components/game/canvas/Building';
import { PlayerLevelsArray } from '../utils/gameData/PlayerLevels';
// Context
export const PlayerContext = React.createContext();

const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(tempPlayerData);
  // Modals
  const [cantAffordBuilding, setCantAffordBuilding] = useState(false); // Open modal
  const [cantAffordTile, setCantAffordTile] = useState(false); // Open modal
  const [cantAffordTroop, setCantAffordTroop] = useState(false); // Open modal
  // Levels
  const [playerLevelsData, setPlayerLevelsData] = useState(PlayerLevelsArray); // List of levels
  const [currentLevelData, setCurrentLevelData] = useState({}); // One level
  // Troops

  useEffect(() => {
    // Set the current level
    const currentLevelNum = player.playerLevel;
    const foundLevel = playerLevelsData.find(
      (e) => e.level === currentLevelNum
    );
    setCurrentLevelData(foundLevel);
  }, [player.playerLevel]);

  // References
  const mouseItemRef = useRef(null);
  const mouseBuildingRef = useRef(null);
  const buildingIDNumberRef = useRef(1);

  const buyBuilding = (building) => {
    // Check currency type and affordability
    console.log('BUY BUILDING JSX', building);

    if (
      building.currencyType === 'gold' &&
      building.cost > player.currencyData.gold
    ) {
      setCantAffordBuilding(true);
    } else if (
      building.currencyType === 'gems' &&
      building.cost > player.currencyData.gems
    ) {
      setCantAffordBuilding(true);
    } else {
      mouseItemRef.current = building;

      // Preload image for new building
      const mouseBuildingImage = new Image();
      mouseBuildingImage.src = building.imageUrl;

      // Onload image create building object
      mouseBuildingImage.onload = () => {
        const selectedBuilding = new Building(
          buildingIDNumberRef.current, // ID
          building.name, // building name lowercase
          building.title, // building name For Show
          mouseBuildingImage, // Image
          building.description, //description
          building.gridSize, // gridSize
          building.xpForPurchasing, // xp for
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
          building.imageHeight // Image height
        );
        mouseBuildingRef.current = selectedBuilding;
      };
    }
  };

  // Buy Troops
  const buyTroop = (troop) => {
    console.log('YYYYYYYYYYY', troop);
    // Check currency type and affordability
    if (
      troop.currencyType === 'gold' &&
      troop.cost > player.currencyData.gold
    ) {
      setCantAffordTroop(true);
    } else if (
      troop.currencyType === 'gems' &&
      troop.cost > player.currencyData.gems
    ) {
      setCantAffordTroop(true);
    } else {

    }
  };

  // Cant afford modal
  const closeCantAffordBuildingModal = () => {
    setCantAffordBuilding(false);
  };
  const closeCantAffordTileModal = () => {
    setCantAffordBuilding(false);
  };
  const openCantAffordTileModal = () => {
    setCantAffordBuilding(true);
  };

  return (
    <PlayerContext.Provider
      value={{
        // Player
        player,
        setPlayer,
        // Mouse
        mouseItemRef,
        mouseBuildingRef,
        // Buildings
        buyBuilding,
        cantAffordBuilding,
        closeCantAffordBuildingModal,
        buildingIDNumberRef,
        // Levels
        currentLevelData,
        // Tiles
        cantAffordTile,
        closeCantAffordTileModal,
        openCantAffordTileModal,
        buyTroop,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
