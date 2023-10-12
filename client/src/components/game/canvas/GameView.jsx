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
import TechMenuBar from '../menus/SecondaryMenuBar/TechMenuBar';
import PlayerDataModal from '../modals/PlayerDataModal';
import BuyTileModal from '../modals/BuyTileModal';
import CantAffordTile from '../modals/CantAffordTile';
import LevelCompletedModal from '../modals/LevelCompletedModal';
import InProgressBar from '../modals/InProgressBar';

function GameView() {
  const { displayMainMenuBar, techMenuSelected, playerDataModel, buyTileScreenToggle, tileToPurchase, levelCompletedModalOpen, inprogressUpdatesModalOpen } = useContext(ToggleContext);
  const { cantAffordBuilding, cantAffordTile, player } = useContext(PlayerContext);

  console.log('PLAYER CANVAS', player);
  console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuUU');
  return (
    <main className='relative grid h-full w-full bg-red-200 border-solid border-yellow-300 border-4'>
      <GameCanvas />
      {cantAffordBuilding && <CantAffordBuilding />}
      {cantAffordTile && <CantAffordTile />}
      {techMenuSelected && <TechMenuBar />}
      {levelCompletedModalOpen && <LevelCompletedModal />}
      {inprogressUpdatesModalOpen && <InProgressBar />}
      {playerDataModel && <PlayerDataModal />}
      {buyTileScreenToggle && <BuyTileModal tileToPurchase={tileToPurchase}/>}
      {displayMainMenuBar ? <MainMenuBar /> : <OpenMenuButton />}
    </main>
  );
}

export default GameView;
