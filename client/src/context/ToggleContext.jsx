import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [displayMainMenuBar, setDisplayMainMenuBar] = useState(false);
  const [playerDataModel, setPlayerDataModel] = useState(true);
  const [buyTileScreenToggle, setBuyTileScreenToggle] = useState(false);
  const [levelCompletedModalOpen, setLevelCompletedModalOpen] = useState(false);
  // Secondary menus
  const [selectedSecondaryMenu, setSelectedSecondaryMenu] = useState(false);
  const [buildingsMenuSelected, setBuildingsMenuSelected] = useState(false);
  const [techMenuSelected, setTechMenuSelected] = useState(false);
  const [troopsMenuSelected, setTroopsMenuSelected] = useState(false);

  // Tiles
  const [tileToPurchase, setTileToPurchase] = useState(false);

  const [activeNav, setActiveNav] = useState('/');

  // Navigation
  const toggleNavbarOpenClosed = () => {
    setToggleNavigation(!toggleNavigation);
  };

  // Main menu - troops, buildings
  const openMainMenuBar = () => {
    setDisplayMainMenuBar(true);
  };

  // Level completed modal
  const openLevelCompletedModel = () => {
    setLevelCompletedModalOpen(true);
  };
  const closeLevelCompletedModel = () => {
    setLevelCompletedModalOpen(false);
  };

  // Buy tile
  const openBuyTileModal = (tile) => {
    setBuyTileScreenToggle(true);
    setTileToPurchase(tile);
  };
  const closeBuyTileModal = () => {
    setBuyTileScreenToggle(false);
  };

  const closeMainMenuBar = () => {
    setDisplayMainMenuBar(false);
    setBuildingsMenuSelected(false);
    setTechMenuSelected(false);
    setTroopsMenuSelected(false);
    setSelectedSecondaryMenu(false);
  };

  const openSecondaryMenu = (name) => {
    setSelectedSecondaryMenu(true);

    if (name === 'buildings') {
      setBuildingsMenuSelected(true);
      setTechMenuSelected(false);
      setTroopsMenuSelected(false);
    }
    if (name === 'technology') {
      setBuildingsMenuSelected(false);
      setTechMenuSelected(true);
      setTroopsMenuSelected(false);
      setDisplayMainMenuBar(false);
    }
    if (name === 'troops') {
      setBuildingsMenuSelected(false);
      setTechMenuSelected(false);
      setTroopsMenuSelected(true);
    }
    if (name === 'guilds') {
      setBuildingsMenuSelected(false);
      setTechMenuSelected(false);
      setTroopsMenuSelected(true);
    }
  };

  const quickOpenBuildingsMenu = () => {
    setDisplayMainMenuBar(true);
    setSelectedSecondaryMenu(true);
    setBuildingsMenuSelected(true);
    setTechMenuSelected(false);
    setTroopsMenuSelected(false);
  };

  const closeTechMenu = () => {
    setTechMenuSelected(false);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbarOpenClosed,
        setActiveNav,
        activeNav,
        // Main menu
        openMainMenuBar,
        closeMainMenuBar,
        displayMainMenuBar,
        // Secondary menu
        openSecondaryMenu,
        selectedSecondaryMenu,
        buildingsMenuSelected,
        techMenuSelected,
        troopsMenuSelected,
        // buildings menu
        quickOpenBuildingsMenu,
        closeTechMenu,
        playerDataModel,
        buyTileScreenToggle,
        // Tiles
        tileToPurchase,
        openBuyTileModal,
        closeBuyTileModal,
        // Level completed
        levelCompletedModalOpen,
        openLevelCompletedModel,
        closeLevelCompletedModel,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
