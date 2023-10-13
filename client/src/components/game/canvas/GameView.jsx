import React, { useContext } from 'react';
// Components
import OpenMenuButton from '../menus/MainMenu/OpenMenuButton';
import GameCanvas from './GameCanvas';
import MainMenuBar from '../menus/MainMenu/MainMenuBar';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
// Components
import CantAffordBuilding from '../modals/CantAffordBuilding';
import TechMenuBar from '../menus/Tech/TechMenuBar';
import PlayerDataModal from '../modals/PlayerDataModal';
import BuyTileModal from '../modals/BuyTileModal';
import CantAffordTile from '../modals/CantAffordTile';
import LevelCompletedModal from '../modals/LevelCompletedModal';
import InProgressBar from '../modals/InProgressBar';
import RightMenuBar from '../menus/RightSideMenu/RightMenuBar';
import TroopsOwnedMenu from '../menus/Troops/TroopsOwnedMenu';
import CityMenuBar from '../menus/CityMenu/CityMenuBar';

function GameView() {
  const { displayMainMenuBar, techMenuSelected, playerDataModel, buyTileScreenToggle, tileToPurchase, levelCompletedModalOpen, inprogressUpdatesModalOpen, troopMenuSelected } = useContext(ToggleContext);
  const { cantAffordBuilding, cantAffordTile } = useContext(PlayerContext);

  return (
    <main className='relative grid h-full w-full bg-red-200 border-solid border-yellow-300 border-4'>
      <GameCanvas />
      <RightMenuBar />
      <CityMenuBar />
      {cantAffordBuilding && <CantAffordBuilding />}
      {cantAffordTile && <CantAffordTile />}
      {techMenuSelected && <TechMenuBar />}
      {troopMenuSelected && <TroopsOwnedMenu />}
      {levelCompletedModalOpen && <LevelCompletedModal />}
      {inprogressUpdatesModalOpen && <InProgressBar />}
      {playerDataModel && <PlayerDataModal />}
      {buyTileScreenToggle && <BuyTileModal tileToPurchase={tileToPurchase}/>}
      {displayMainMenuBar ? <MainMenuBar /> : <OpenMenuButton />}
    </main>
  );
}

export default GameView;
