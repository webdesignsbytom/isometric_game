import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [displayMainMenuBar, setDisplayMainMenuBar] = useState(false);
  // Secondary menus
  const [selectedSecondaryMenu, setSelectedSecondaryMenu] = useState(false);
  const [buildingsMenuSelected, setBuildingsMenuSelected] = useState(false);
  const [techMenuSelected, setTechMenuSelected] = useState(false);
  const [troopsMenuSelected, setTroopsMenuSelected] = useState(false);

  const [activeNav, setActiveNav] = useState('/');

  const toggleNavbarOpenClosed = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const openMainMenuBar = () => {
    setDisplayMainMenuBar(true);
  };

  const closeMainMenuBar = () => {
    setDisplayMainMenuBar(false);
    setBuildingsMenuSelected(false);
    setTechMenuSelected(false);
    setTroopsMenuSelected(false);
    setSelectedSecondaryMenu(false);
  };

  const openSecondaryMenu = (name) => {
    console.log('name', name);
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
    }
    if (name === 'troops') {
      setBuildingsMenuSelected(false);
      setTechMenuSelected(false);
      setTroopsMenuSelected(true);
    }
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
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
